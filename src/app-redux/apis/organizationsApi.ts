import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Organization {
  id: string;
  name: string;
  description: string;
}

const type: 'organizations' = 'organizations';
const baseUrl = import.meta.env.VITE_API_URL + '/api/';

export const organizationsApi = createApi({
  reducerPath: `${type}Api`,
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: [type],
  endpoints: (builder) => ({
    getOrganizations: builder.query<Organization[], void>({
      query: () => `${type}`,
      providesTags: (result) => [
        ...(result || []).map(({ id }) => ({ type, id })),
        { type, id: 'PARTIAL-LIST' },
      ],
    }),
    getOrganizationById: builder.query<Organization, number>({
      query: (id) => `${type}/${id}`,
      providesTags: (result) =>
        result
          ? [
              { type, result: result.id },
              { type, id: 'PARTIAL-LIST' },
            ]
          : [{ type, id: 'PARTIAL-LIST' }],
    }),
    createOrganization: builder.mutation<{ id: number }, Partial<Organization>>(
      {
        query: (body) => ({
          url: `${type}`,
          method: 'POST',
          body,
        }),
        invalidatesTags: [{ type, id: 'PARTIAL-LIST' }],
      },
    ),
    updateOrganization: builder.mutation<
      { id: number },
      Pick<Organization, 'id'> & Partial<Organization>
    >({
      query: (body) => ({
        url: `${type}/${body.id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [{ type, id: 'PARTIAL-LIST' }],
    }),
    deleteOrganization: builder.mutation<
      { id: number },
      Pick<Organization, 'id'>
    >({
      query: (body) => ({
        url: `${type}/${body.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type, id: 'PARTIAL-LIST' }],
    }),
  }),
});

export const {
  useGetOrganizationsQuery,
  useGetOrganizationByIdQuery,
  useCreateOrganizationMutation,
  useUpdateOrganizationMutation,
  useDeleteOrganizationMutation,
} = organizationsApi;
