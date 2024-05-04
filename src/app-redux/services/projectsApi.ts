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
} from '@/datasource/function_types';
import type { Project } from '@/types';

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['projects'],
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], GetProjectsFnParams>({
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
    getProjectById: builder.query<Project, GetProjectFnParams>({
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
    createProject: builder.mutation<Project, CreateProjectFnParams>({
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
    updateProject: builder.mutation<Project, UpdateProjectFnParams>({
      queryFn: async (arg) => {
        try {
          const res = await updateProject(arg);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      async onQueryStarted(
        { project: { id }, ...patch },
        { dispatch, queryFulfilled },
      ) {
        const patchResult = dispatch(
          projectsApi.util.updateQueryData(
            'getProjectById',
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
      invalidatesTags: ['projects'],
    }),
    deleteProject: builder.mutation<void, DeleteProjectFnParams>({
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
  }),
});

export const {
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  useCreateProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectsApi;
