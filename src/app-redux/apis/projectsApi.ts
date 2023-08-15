import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Project {
  id: string;
  organizationId: string;
  name: string;
  description: string;
}

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + '/api/',
  }),
  tagTypes: ['projects'],
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], void>({
      query: () => `projects`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'projects' as const, id })),
              {
                type: 'projects',
                id: 'PARTIAL-LIST',
              },
            ]
          : [
              {
                type: 'projects',
                id: 'PARTIAL-LIST',
              },
            ],
    }),
    getProjectById: builder.query<Project, number>({
      query: (name) => `projects/${name}`,
      providesTags: (result) =>
        result
          ? [
              { type: 'projects', result: result.id },
              {
                type: 'projects',
                id: 'PARTIAL-LIST',
              },
            ]
          : [
              {
                type: 'projects',
                id: 'PARTIAL-LIST',
              },
            ],
    }),
    createProject: builder.mutation<{ id: number }, Partial<Project>>({
      query: (body) => ({
        url: `projects`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'projects', id: 'PARTIAL-LIST' }],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  useCreateProjectMutation,
} = projectsApi;
