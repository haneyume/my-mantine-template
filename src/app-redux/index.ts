export { Provider as AppReduxProvider } from 'react-redux';

export { store } from './store';
export type { RootState } from './store';

export { useAppSelector, useAppDispatch } from './hooks';

// --------------------------------------------------
//
// State General
//
// --------------------------------------------------

export * from './state-general/generalSlice';

// --------------------------------------------------
//
// Service APIs
//
// --------------------------------------------------
