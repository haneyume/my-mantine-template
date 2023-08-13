import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type User = {
  id: number;
  name: string;
  username: string;
  // email: string;
  // address: {
  //   street: string;
  //   suite: string;
  //   city: string;
  //   zipcode: string;
  //   geo: {
  //     lat: string;
  //     lng: string;
  //   };
  // };
  // phone: string;
  // website: string;
  // company: {
  //   name: string;
  //   catchPhrase: string;
  //   bs: string;
  // };
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  tagTypes: ['users'],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => `users`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'users' as const, id })),
              {
                type: 'users',
                id: 'PARTIAL-LIST',
              },
            ]
          : [
              {
                type: 'users',
                id: 'PARTIAL-LIST',
              },
            ],
    }),
    getUserById: builder.query<User, number>({
      query: (name) => `users/${name}`,
      providesTags: (result) =>
        result
          ? [
              { type: 'users', result: result.id },
              {
                type: 'users',
                id: 'PARTIAL-LIST',
              },
            ]
          : [
              {
                type: 'users',
                id: 'PARTIAL-LIST',
              },
            ],
    }),
    createUser: builder.mutation<{ id: number }, Partial<User>>({
      query: (body) => ({
        url: `users`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'users', id: 'PARTIAL-LIST' }],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
