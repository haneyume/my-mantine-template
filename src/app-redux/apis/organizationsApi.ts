import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Organization {
  id: string;
  name: string;
  description: string;
  projects: Array<{
    id: string;
    name: string;
    description: string;
  }>;
}

export const organizationsApi = createApi({
  reducerPath: 'organizationsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + '/api/',
  }),
  tagTypes: ['organizations'],
  endpoints: (builder) => ({
    getOrganizations: builder.query<Organization[], void>({
      query: () => `organizations`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: 'organizations' as const,
                id,
              })),
              {
                type: 'organizations',
                id: 'PARTIAL-LIST',
              },
            ]
          : [
              {
                type: 'organizations',
                id: 'PARTIAL-LIST',
              },
            ],
    }),
    getOrganizationById: builder.query<Organization, number>({
      query: (name) => `organizations/${name}`,
      providesTags: (result) =>
        result
          ? [
              { type: 'organizations', result: result.id },
              {
                type: 'organizations',
                id: 'PARTIAL-LIST',
              },
            ]
          : [
              {
                type: 'organizations',
                id: 'PARTIAL-LIST',
              },
            ],
    }),
    createOrganization: builder.mutation<{ id: number }, Partial<Organization>>(
      {
        query: (body) => ({
          url: `organizations`,
          method: 'POST',
          body,
        }),
        invalidatesTags: [{ type: 'organizations', id: 'PARTIAL-LIST' }],
      },
    ),
  }),
});

export const {
  useGetOrganizationsQuery,
  useGetOrganizationByIdQuery,
  useCreateOrganizationMutation,
} = organizationsApi;
