import { configureStore } from '@reduxjs/toolkit';

import generalReducer from '../features/general/generalSlice';
import counterReducer from '../features/counter/counterSlice';
import apiItemReducer from '../features/apiItems/apiItemsSlice';
import usersSlice from '../features/users/usersSlice';

import { profileApi } from '../apis/profileApi';
import { organizationsApi } from '../apis/organizationsApi';
import { projectsApi } from '../apis/projectsApi';
import { userApi } from '../apis/userApi';
import { postsApi } from '../apis/postsApi';

export const store = configureStore({
  reducer: {
    general: generalReducer,
    counter: counterReducer,
    apiItems: apiItemReducer,
    users: usersSlice,
    [profileApi.reducerPath]: profileApi.reducer,
    [organizationsApi.reducerPath]: organizationsApi.reducer,
    [projectsApi.reducerPath]: projectsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      profileApi.middleware,
      organizationsApi.middleware,
      projectsApi.middleware,
      userApi.middleware,
      postsApi.middleware,
    ]),
  devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
