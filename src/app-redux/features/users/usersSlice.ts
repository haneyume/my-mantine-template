import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

import { userApi } from '../../apis/userApi';

type User = {
  id: string;
  name: string;
};

const usersAdapter = createEntityAdapter<User>();

const usersSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState(),
  reducers: {
    addOne: usersAdapter.addOne,
    updateOne: usersAdapter.updateOne,
    removeOne: usersAdapter.removeOne,
    setAll: usersAdapter.setAll,
  },
  extraReducers(builder) {
    builder.addMatcher(
      userApi.endpoints.getUserById.matchFulfilled,
      (state, action) => {
        usersAdapter.setAll(state, [
          {
            id: `${action.payload.id}`,
            name: action.payload.name,
          },
        ]);
      },
    );
  },
});

// --------------------------------------------------

export const {
  addOne: addOneUser,
  updateOne: updateOneUser,
  removeOne: removeOneUser,
  setAll: setAllUsers,
} = usersSlice.actions;

// --------------------------------------------------

const userSelector = usersAdapter.getSelectors<RootState>(
  (state) => state.users,
);

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectTotal: selectTotalUsers,
} = userSelector;

// --------------------------------------------------

export default usersSlice.reducer;
