import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  getTeamMembers,
  getTeamMember,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} from '@/datasource';
import type {
  GetTeamMembersFnParams,
  GetTeamMemberFnParams,
  CreateTeamMemberFnParams,
  UpdateTeamMemberFnParams,
  DeleteTeamMemberFnParams,
} from '@/datasource/function_types';
import type { TeamMember } from '@/types';

export const teamMembersApi = createApi({
  reducerPath: 'teamMembersApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['teamMembers'],
  endpoints: (builder) => ({
    getTeamMembers: builder.query<TeamMember[], GetTeamMembersFnParams>({
      queryFn: async (arg) => {
        try {
          const res = await getTeamMembers(arg);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      providesTags: ['teamMembers'],
    }),
    getTeamMemberById: builder.query<TeamMember, GetTeamMemberFnParams>({
      queryFn: async (arg) => {
        try {
          const res = await getTeamMember(arg);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      providesTags: ['teamMembers'],
    }),
    createTeamMember: builder.mutation<TeamMember, CreateTeamMemberFnParams>({
      queryFn: async (arg) => {
        try {
          const res = await createTeamMember(arg);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      invalidatesTags: ['teamMembers'],
    }),
    updateTeamMember: builder.mutation<TeamMember, UpdateTeamMemberFnParams>({
      queryFn: async (arg) => {
        try {
          const res = await updateTeamMember(arg);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      async onQueryStarted(
        { teamMember: { team_id, id }, ...patch },
        { dispatch, queryFulfilled },
      ) {
        const patchResult = dispatch(
          teamMembersApi.util.updateQueryData(
            'getTeamMemberById',
            { teamId: team_id, id },
            (draft) => {
              Object.assign(draft, patch);
            },
          ),
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: ['teamMembers'],
    }),
    deleteTeamMember: builder.mutation<void, DeleteTeamMemberFnParams>({
      queryFn: async (arg) => {
        try {
          await deleteTeamMember(arg);

          return { data: undefined };
        } catch (error: any) {
          return { error };
        }
      },
      invalidatesTags: ['teamMembers'],
    }),
  }),
});

export const {
  useGetTeamMembersQuery,
  useGetTeamMemberByIdQuery,
  useCreateTeamMemberMutation,
  useUpdateTeamMemberMutation,
  useDeleteTeamMemberMutation,
} = teamMembersApi;
