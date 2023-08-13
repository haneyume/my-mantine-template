import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  // const response = await client.get('/fakeApi/users');
  // return response.data;
  return [];
});
