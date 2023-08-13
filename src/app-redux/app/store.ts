import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import apiItemReducer from '../features/apiItems/apiItemsSlice';
import usersSlice from '../features/users/usersSlice';

import { userApi } from '../apis/userApi';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    apiItems: apiItemReducer,
    users: usersSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware]),
  devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
