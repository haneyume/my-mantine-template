export { Provider as AppReduxProvider } from 'react-redux';

export { store } from './store';
export type { RootState } from './store';

export { useAppSelector, useAppDispatch } from './hooks';

// --------------------------------------------------
//
// Service APIs
//
// --------------------------------------------------

export * from './services/projectsApi';

// --------------------------------------------------
//
// Slices
//
// --------------------------------------------------

export * from './slices/generalSlice';
export * from './slices/projectSlice';
