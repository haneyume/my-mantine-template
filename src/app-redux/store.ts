import { configureStore } from '@reduxjs/toolkit';

import { projectsApi } from './services/projectsApi';

import generalReducer from './slices/generalSlice';
import projectReducer from './slices/projectSlice';

export const store = configureStore({
  reducer: {
    general: generalReducer,
    project: projectReducer,

    [projectsApi.reducerPath]: projectsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      // Add the projectsApi middleware
      projectsApi.middleware,
    ]),
  devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
