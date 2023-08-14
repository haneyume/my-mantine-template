import { rest } from 'msw';

interface LoginBody {
  username: string;
}

interface LoginResponse {
  username: string;
  firstName: string;
}

export const handlers = [
  rest.post<LoginBody, LoginResponse>('/login', async (req, res, ctx) => {
    const { username } = await req.json();

    return res(
      ctx.json({
        username,
        firstName: 'John',
      }),
    );
  }),
  rest.get('https://jsonplaceholder.typicode.com/users/1', (_, res, ctx) => {
    return res(
      ctx.json({
        id: '1',
        name: 'DDDD',
      }),
    );
  }),
];
