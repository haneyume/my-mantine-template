import { configureStore } from '@reduxjs/toolkit';

import generalReducer from './state-general/generalSlice';

export const store = configureStore({
  reducer: {
    general: generalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([]),
  devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
