import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} from '@/datasource';
import type {
  GetProjectsFnParams,
  GetProjectFnParams,
  CreateProjectFnParams,
  UpdateProjectFnParams,
  DeleteProjectFnParams,
  //
  GetProjectsFnReturn,
  GetProjectFnReturn,
  CreateProjectFnReturn,
  UpdateProjectFnReturn,
  DeleteProjectFnReturn,
} from '@/datasource/function_types';

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['projects'],
  endpoints: (builder) => ({
    getProjects: builder.query<GetProjectsFnReturn, GetProjectsFnParams>({
      queryFn: async (arg) => {
        try {
          const res = await getProjects(arg);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      providesTags: ['projects'],
    }),
    getProjectById: builder.query<GetProjectFnReturn, GetProjectFnParams>({
      queryFn: async (arg) => {
        try {
          const res = await getProject(arg);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      providesTags: ['projects'],
    }),
    createProject: builder.mutation<
      CreateProjectFnReturn,
      CreateProjectFnParams
    >({
      queryFn: async (arg) => {
        try {
          const res = await createProject(arg);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      invalidatesTags: ['projects'],
    }),
    updateProject: builder.mutation<
      UpdateProjectFnReturn,
      UpdateProjectFnParams
    >({
      queryFn: async (arg) => {
        try {
          const res = await updateProject(arg);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      onQueryStarted: async (
        { project: { id }, ...patch },
        { dispatch, queryFulfilled },
      ) => {
        const patchResult = dispatch(
          projectsApi.util.updateQueryData(
            'getProjectById',
            { id },
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
      invalidatesTags: ['projects'],
    }),
    deleteProject: builder.mutation<
      DeleteProjectFnReturn,
      DeleteProjectFnParams
    >({
      queryFn: async (arg) => {
        try {
          await deleteProject(arg);

          return { data: undefined };
        } catch (error: any) {
          return { error };
        }
      },
      invalidatesTags: ['projects'],
    }),
    refetchProjects: builder.mutation<void, void>({
      queryFn: async () => {
        try {
          return { data: undefined };
        } catch (error: any) {
          return { error };
        }
      },
      invalidatesTags: ['projects'],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  useCreateProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
  useRefetchProjectsMutation,
} = projectsApi;
