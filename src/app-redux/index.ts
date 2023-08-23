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
  setCurrentOrganizationId,
  setCurrentProjectId,
  currentOrganizationId,
  currentProjectId,
} from './features/general/generalSlice';

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

export {} from './features/apiItems/apiItemsSlice2';

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

export {
  profileApi,
  useGetProfileQuery,
  useUpdateProfileMutation,
} from './apis/profileApi';

export {
  organizationsApi,
  useGetOrganizationsQuery,
  useGetOrganizationByIdQuery,
  useCreateOrganizationMutation,
  useUpdateOrganizationMutation,
  useDeleteOrganizationMutation,
} from './apis/organizationsApi';

export {
  projectsApi,
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  useCreateProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} from './apis/projectsApi';

export { userApi, useGetUsersQuery, useGetUserByIdQuery } from './apis/userApi';

export {
  postsApi,
  useGetPostsQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} from './apis/postsApi';
