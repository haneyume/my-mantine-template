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
  //
  GetTeamsFnReturn,
  GetTeamFnReturn,
  CreateTeamFnReturn,
  UpdateTeamFnReturn,
  DeleteTeamFnReturn,
} from '@/datasource/function_types';

export const teamsApi = createApi({
  reducerPath: 'teamsApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['teams'],
  endpoints: (builder) => ({
    getTeams: builder.query<GetTeamsFnReturn, GetTeamsFnParams>({
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
    getTeamById: builder.query<GetTeamFnReturn, GetTeamFnParams>({
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
    createTeam: builder.mutation<CreateTeamFnReturn, CreateTeamFnParams>({
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
    updateTeam: builder.mutation<UpdateTeamFnReturn, UpdateTeamFnParams>({
      queryFn: async (arg) => {
        try {
          const res = await updateTeam(arg);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      onQueryStarted: async (
        { team: { id }, ...patch },
        { dispatch, queryFulfilled },
      ) => {
        const patchResult = dispatch(
          teamsApi.util.updateQueryData('getTeamById', { id }, (draft) => {
            Object.assign(draft || {}, patch);
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
    deleteTeam: builder.mutation<DeleteTeamFnReturn, DeleteTeamFnParams>({
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
    refetchTeams: builder.mutation<void, void>({
      queryFn: async () => {
        try {
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
  useRefetchTeamsMutation,
} = teamsApi;
