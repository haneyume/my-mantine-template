import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  getTeams,
  getTeam,
  createTeam,
  updateTeam,
  deleteTeam,
} from '@/datasource';
import type {
  GetTeamsFnParams,
  GetTeamFnParams,
  CreateTeamFnParams,
  UpdateTeamFnParams,
  DeleteTeamFnParams,
} from '@/datasource/function_types';
import type { Team } from '@/types';

export const teamsApi = createApi({
  reducerPath: 'teamsApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['teams'],
  endpoints: (builder) => ({
    getTeams: builder.query<Team[], GetTeamsFnParams>({
      queryFn: async (arg) => {
        try {
          const res = await getTeams(arg);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      providesTags: ['teams'],
    }),
    getTeamById: builder.query<Team, GetTeamFnParams>({
      queryFn: async (arg) => {
        try {
          const res = await getTeam(arg);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      providesTags: ['teams'],
    }),
    createTeam: builder.mutation<Team, CreateTeamFnParams>({
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
    updateTeam: builder.mutation<Team, UpdateTeamFnParams>({
      queryFn: async (arg) => {
        try {
          const res = await updateTeam(arg);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      async onQueryStarted(
        { team: { id }, ...patch },
        { dispatch, queryFulfilled },
      ) {
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
    deleteTeam: builder.mutation<void, DeleteTeamFnParams>({
      queryFn: async (arg) => {
        try {
          await deleteTeam(arg);

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
