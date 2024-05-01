import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from '@/datasource';
import type { User } from '@/types';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['users'],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      queryFn: async () => {
        try {
          const res = await getUsers();

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      providesTags: ['users'],
    }),
    getUserById: builder.query<User, { id: string }>({
      queryFn: async (arg) => {
        try {
          const res = await getUser(arg.id);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      providesTags: ['users'],
    }),
    createUser: builder.mutation<User, User>({
      queryFn: async (arg) => {
        try {
          const res = await createUser(arg);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      invalidatesTags: ['users'],
    }),
    updateUser: builder.mutation<User, User>({
      queryFn: async (arg) => {
        try {
          const res = await updateUser(arg);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          usersApi.util.updateQueryData('getUserById', { id }, (draft) => {
            Object.assign(draft, patch);
          }),
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: ['users'],
    }),
    deleteUser: builder.mutation<void, { id: string }>({
      queryFn: async (arg) => {
        try {
          await deleteUser(arg.id);

          return { data: undefined };
        } catch (error: any) {
          return { error };
        }
      },
      invalidatesTags: ['users'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;
