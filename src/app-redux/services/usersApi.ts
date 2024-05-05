import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from '@/datasource';
import type {
  GetUsersFnParams,
  GetUserFnParams,
  CreateUserFnParams,
  UpdateUserFnParams,
  DeleteUserFnParams,
  //
  GetUsersFnReturn,
  GetUserFnReturn,
  CreateUserFnReturn,
  UpdateUserFnReturn,
  DeleteUserFnReturn,
} from '@/datasource/function_types';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['users'],
  endpoints: (builder) => ({
    getUsers: builder.query<GetUsersFnReturn, GetUsersFnParams>({
      queryFn: async (arg) => {
        try {
          const res = await getUsers(arg);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      providesTags: ['users'],
    }),
    getUserById: builder.query<GetUserFnReturn, GetUserFnParams>({
      queryFn: async (arg) => {
        try {
          const res = await getUser(arg);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      providesTags: ['users'],
    }),
    createUser: builder.mutation<CreateUserFnReturn, CreateUserFnParams>({
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
    updateUser: builder.mutation<UpdateUserFnReturn, UpdateUserFnParams>({
      queryFn: async (arg) => {
        try {
          const res = await updateUser(arg);

          return { data: res };
        } catch (error: any) {
          return { error };
        }
      },
      onQueryStarted: async (
        { user: { id }, ...patch },
        { dispatch, queryFulfilled },
      ) => {
        const patchResult = dispatch(
          usersApi.util.updateQueryData('getUserById', { id }, (draft) => {
            Object.assign(draft || {}, patch);
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
    deleteUser: builder.mutation<DeleteUserFnReturn, DeleteUserFnParams>({
      queryFn: async (arg) => {
        try {
          await deleteUser(arg);

          return { data: undefined };
        } catch (error: any) {
          return { error };
        }
      },
      invalidatesTags: ['users'],
    }),
    refetchUsers: builder.mutation<void, void>({
      queryFn: async () => {
        try {
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
  useRefetchUsersMutation,
} = usersApi;
