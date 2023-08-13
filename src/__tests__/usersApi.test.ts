import { describe, it, expect } from 'vitest';

import { store, userApi } from '../app-redux';

describe('usersApi', () => {
  it('get user 1', async () => {
    const result = await store.dispatch(
      userApi.endpoints.getUserById.initiate(1),
    );

    const data = result.data;

    console.log(data);

    expect(data).toBeTruthy();

    console.log(store.getState());

    userApi.util.updateQueryData('getUserById', 1, (oldData) => {
      return {
        ...oldData,
        name: 'test',
      };
    });
  });

  // it('create user', async () => {
  //   const result = await store.dispatch(
  //     userApi.endpoints.createUser.initiate({
  //       name: 'test',
  //     }),
  //   );

  //   console.log(JSON.stringify(store.getState(), null, 2));
  // });
});
