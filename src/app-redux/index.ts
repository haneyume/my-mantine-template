export { Provider as ReduxProvider } from 'react-redux';

export { store } from './app/store';
export { useAppSelector, useAppDispatch } from './hooks/hooks';
export type { RootState, AppDispatch } from './app/store';

// --------------------------------------------------
//
// Export all the slices from the store
//
// --------------------------------------------------
export {
  incrementCounter,
  decrementCounter,
  incrementCounterByAmount,
  counterValue,
  counterValue2,
} from './features/counter/counterSlice';

export {
  addOneApiItem,
  updateOneApiItem,
  setAllApiItems,
  selectApiItem,
  allApiItems,
  selectedApiItem,
} from './features/apiItems/apiItemsSlice';

export {
  addOneUser,
  updateOneUser,
  removeOneUser,
  setAllUsers,
  selectAllUsers,
  selectUserById,
  selectTotalUsers,
} from './features/users/usersSlice';

// --------------------------------------------------
//
// Export all the api calls
//
// --------------------------------------------------
export { userApi, useGetUsersQuery, useGetUserByIdQuery } from './apis/userApi';
