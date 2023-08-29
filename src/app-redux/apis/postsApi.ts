import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { z } from 'zod';

export interface Post {
  id: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

export const postSchema = z.object({
  id: z.string(),
  content: z.string(),
  likeCount: z.number(),
  commentCount: z.number(),
});

const type: 'posts' = 'posts';
const baseUrl = import.meta.env.VITE_API_URL + '/api/';

export const postsApi = createApi({
  reducerPath: `${type}Api`,
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: [type],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => `${type}`,
      providesTags: (result) => [
        ...(result || []).map(({ id }) => ({ type, id })),
        { type, id: 'PARTIAL-LIST' },
      ],
    }),
    getPostById: builder.query<Post, number>({
      query: (id) => `${type}/${id}`,
      providesTags: (result) =>
        result
          ? [
              { type, result: result.id },
              { type, id: 'PARTIAL-LIST' },
            ]
          : [{ type, id: 'PARTIAL-LIST' }],
    }),
    createPost: builder.mutation<{ id: number }, Partial<Post>>({
      query: (body) => ({
        url: `${type}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type, id: 'PARTIAL-LIST' }],
    }),
    updatePost: builder.mutation<
      { id: number },
      Pick<Post, 'id'> & Partial<Post>
    >({
      query: (body) => ({
        url: `${type}/${body.id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [{ type, id: 'PARTIAL-LIST' }],
    }),
    deletePost: builder.mutation<{ id: number }, Pick<Post, 'id'>>({
      query: (body) => ({
        url: `${type}/${body.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type, id: 'PARTIAL-LIST' }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;
