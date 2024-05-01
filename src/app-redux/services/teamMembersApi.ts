import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  getTeamMembers,
  getTeamMember,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} from '@/datasource';
import type { TeamMember } from '@/types';

export const teamMembersApi = createApi({
  reducerPath: 'teamMembersApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['teamMembers'],
  endpoints: (builder) => ({
    getTeamMembers: builder.query<TeamMember[], void>({
      queryFn: async () => {
        try {
          const res = await getTeamMembers();

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      providesTags: ['teamMembers'],
    }),
    getTeamMemberById: builder.query<TeamMember, { id: string }>({
      queryFn: async (arg) => {
        try {
          const res = await getTeamMember(arg.id);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      providesTags: ['teamMembers'],
    }),
    createTeamMember: builder.mutation<TeamMember, TeamMember>({
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
    updateTeamMember: builder.mutation<TeamMember, TeamMember>({
      queryFn: async (arg) => {
        try {
          const res = await updateTeamMember(arg);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          teamMembersApi.util.updateQueryData(
            'getTeamMemberById',
            { id },
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
    deleteTeamMember: builder.mutation<void, { id: string }>({
      queryFn: async (arg) => {
        try {
          await deleteTeamMember(arg.id);

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
