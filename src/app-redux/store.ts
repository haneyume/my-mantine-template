import { configureStore } from '@reduxjs/toolkit';

import { usersApi } from './services/usersApi';
import { teamsApi } from './services/teamsApi';
import { projectsApi } from './services/projectsApi';

import generalReducer from './slices/generalSlice';
import projectReducer from './slices/projectSlice';

export const store = configureStore({
  reducer: {
    general: generalReducer,
    project: projectReducer,

    [usersApi.reducerPath]: usersApi.reducer,
    [teamsApi.reducerPath]: teamsApi.reducer,
    [projectsApi.reducerPath]: projectsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      usersApi.middleware,
      teamsApi.middleware,
      projectsApi.middleware,
    ]),
  devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
