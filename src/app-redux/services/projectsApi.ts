import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} from '@/utils/datasource_idb';
import type { Project } from '@/types';

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['projects'],
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], void>({
      queryFn: async () => {
        try {
          const res = await getProjects();

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      providesTags: ['projects'],
    }),
    getProjectById: builder.query<Project, { id: string }>({
      queryFn: async (arg) => {
        try {
          const res = await getProject(arg.id);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      providesTags: ['projects'],
    }),
    createProject: builder.mutation<void, Project>({
      queryFn: async (arg) => {
        try {
          await createProject(arg);

          return { data: undefined };
        } catch (error: any) {
          return { error };
        }
      },
      invalidatesTags: ['projects'],
    }),
    updateProject: builder.mutation<void, Project>({
      queryFn: async (arg) => {
        try {
          await updateProject(arg);

          return { data: undefined };
        } catch (error: any) {
          return { error };
        }
      },
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
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
    deleteProject: builder.mutation<void, { id: string }>({
      queryFn: async (arg) => {
        try {
          await deleteProject(arg.id);

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
