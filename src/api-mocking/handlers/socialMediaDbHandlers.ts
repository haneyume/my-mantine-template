import { rest } from 'msw';
import { generateMock } from '@anatine/zod-mock';

import { postSchema } from '@/app-redux/apis/postsApi';

const baseUrl = import.meta.env.VITE_API_URL + '/api';

const posts = Array.from({ length: 10 }, () => generateMock(postSchema));

export const socialMediaDbHandlers = [
  rest.get(baseUrl + '/posts', (_, res, ctx) => {
    return res(ctx.json(posts));
  }),
];
