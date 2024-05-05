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
  //
  GetTeamMembersFnReturn,
  GetTeamMemberFnReturn,
  CreateTeamMemberFnReturn,
  UpdateTeamMemberFnReturn,
  DeleteTeamMemberFnReturn,
} from '@/datasource/function_types';

export const teamMembersApi = createApi({
  reducerPath: 'teamMembersApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['teamMembers'],
  endpoints: (builder) => ({
    getTeamMembers: builder.query<
      GetTeamMembersFnReturn,
      GetTeamMembersFnParams
    >({
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
    getTeamMemberById: builder.query<
      GetTeamMemberFnReturn,
      GetTeamMemberFnParams
    >({
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
    createTeamMember: builder.mutation<
      CreateTeamMemberFnReturn,
      CreateTeamMemberFnParams
    >({
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
    updateTeamMember: builder.mutation<
      UpdateTeamMemberFnReturn,
      UpdateTeamMemberFnParams
    >({
      queryFn: async (arg) => {
        try {
          const res = await updateTeamMember(arg);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      onQueryStarted: async (
        { teamMember: { team_id, id }, ...patch },
        { dispatch, queryFulfilled },
      ) => {
        const patchResult = dispatch(
          teamMembersApi.util.updateQueryData(
            'getTeamMemberById',
            { teamId: team_id, id },
            (draft) => {
              Object.assign(draft || {}, patch);
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
    deleteTeamMember: builder.mutation<
      DeleteTeamMemberFnReturn,
      DeleteTeamMemberFnParams
    >({
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
    refetchTeamMembers: builder.mutation<void, void>({
      queryFn: async () => {
        try {
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
  useRefetchTeamMembersMutation,
} = teamMembersApi;
