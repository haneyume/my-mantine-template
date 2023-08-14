import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Post {
  id: number;
  title: string;
  body: string;
  likeCount: number;
  commentCount: number;
}

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + '/api/',
  }),
  tagTypes: ['posts'],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => `posts`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'posts' as const, id })),
              {
                type: 'posts',
                id: 'PARTIAL-LIST',
              },
            ]
          : [
              {
                type: 'posts',
                id: 'PARTIAL-LIST',
              },
            ],
    }),
    getPostById: builder.query<Post, number>({
      query: (name) => `posts/${name}`,
      providesTags: (result) =>
        result
          ? [
              { type: 'posts', result: result.id },
              {
                type: 'posts',
                id: 'PARTIAL-LIST',
              },
            ]
          : [
              {
                type: 'posts',
                id: 'PARTIAL-LIST',
              },
            ],
    }),
    createPost: builder.mutation<{ id: number }, Partial<Post>>({
      query: (body) => ({
        url: `posts`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'posts', id: 'PARTIAL-LIST' }],
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, useCreatePostMutation } =
  postsApi;
