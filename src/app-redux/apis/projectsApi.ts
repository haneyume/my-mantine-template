import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Project {
  id: string;
  organizationId: string;
  name: string;
  description: string;
}

const type: 'projects' = 'projects';
const baseUrl = import.meta.env.VITE_API_URL + '/api/';

export const projectsApi = createApi({
  reducerPath: `${type}Api`,
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: [type],
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], { organizationId: string }>({
      query: ({ organizationId }) => `${type}?organizationId=${organizationId}`,
      providesTags: (result) => [
        ...(result || []).map(({ id }) => ({ type, id })),
        { type, id: `PARTIAL-LIST` },
      ],
    }),
    getProjectById: builder.query<Project, number>({
      query: (id) => `${type}/${id}`,
      providesTags: (result) =>
        result
          ? [
              { type, result: result.id },
              { type, id: 'PARTIAL-LIST' },
            ]
          : [{ type, id: 'PARTIAL-LIST' }],
    }),
    createProject: builder.mutation<{ id: number }, Partial<Project>>({
      query: (body) => ({
        url: `${type}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type, id: 'PARTIAL-LIST' }],
    }),
    updateProject: builder.mutation<
      { id: number },
      Pick<Project, 'id'> & Partial<Project>
    >({
      query: (body) => ({
        url: `${type}/${body.id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [{ type, id: 'PARTIAL-LIST' }],
    }),
    deleteProject: builder.mutation<{ id: number }, Pick<Project, 'id'>>({
      query: (body) => ({
        url: `${type}/${body.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type, id: 'PARTIAL-LIST' }],
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
