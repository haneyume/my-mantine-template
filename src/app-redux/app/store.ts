import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import apiItemReducer from '../features/apiItems/apiItemsSlice';
import usersSlice from '../features/users/usersSlice';

import { userApi } from '../apis/userApi';
import { organizationsApi } from '../apis/organizationsApi';
import { projectsApi } from '../apis/projectsApi';
import { postsApi } from '../apis/postsApi';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    apiItems: apiItemReducer,
    users: usersSlice,
    [userApi.reducerPath]: userApi.reducer,
    [organizationsApi.reducerPath]: organizationsApi.reducer,
    [projectsApi.reducerPath]: projectsApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      userApi.middleware,
      organizationsApi.middleware,
      projectsApi.middleware,
      postsApi.middleware,
    ]),
  devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
