import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  getTeams,
  getTeam,
  createTeam,
  updateTeam,
  deleteTeam,
} from '@/datasource';
import type { Team } from '@/types';

export const teamsApi = createApi({
  reducerPath: 'teamsApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['teams'],
  endpoints: (builder) => ({
    getTeams: builder.query<Team[], void>({
      queryFn: async () => {
        try {
          const res = await getTeams();

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      providesTags: ['teams'],
    }),
    getTeamById: builder.query<Team, { id: string }>({
      queryFn: async (arg) => {
        try {
          const res = await getTeam(arg.id);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      providesTags: ['teams'],
    }),
    createTeam: builder.mutation<Team, Team>({
      queryFn: async (arg) => {
        try {
          const res = await createTeam(arg);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      invalidatesTags: ['teams'],
    }),
    updateTeam: builder.mutation<Team, Team>({
      queryFn: async (arg) => {
        try {
          const res = await updateTeam(arg);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          teamsApi.util.updateQueryData('getTeamById', { id }, (draft) => {
            Object.assign(draft, patch);
          }),
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: ['teams'],
    }),
    deleteTeam: builder.mutation<void, { id: string }>({
      queryFn: async (arg) => {
        try {
          await deleteTeam(arg.id);

          return { data: undefined };
        } catch (error: any) {
          return { error };
        }
      },
      invalidatesTags: ['teams'],
    }),
  }),
});

export const {
  useGetTeamsQuery,
  useGetTeamByIdQuery,
  useCreateTeamMutation,
  useUpdateTeamMutation,
  useDeleteTeamMutation,
} = teamsApi;
