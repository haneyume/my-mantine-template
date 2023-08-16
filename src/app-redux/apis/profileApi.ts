import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Profile {
  id: string;
  nickname: string;
  email: string;
  introduction: string;
}

const type: 'profile' = 'profile';
const baseUrl = import.meta.env.VITE_API_URL + '/api/';

export const profileApi = createApi({
  reducerPath: `${type}Api`,
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: [type],
  endpoints: (builder) => ({
    getProfile: builder.query<Profile, void>({
      query: () => `${type}s/me`,
      providesTags: (_) => [{ type }],
    }),
    updateProfile: builder.mutation<{ id: number }, Partial<Profile>>({
      query: (body) => ({
        url: `${type}s/me`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [{ type }],
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi;
