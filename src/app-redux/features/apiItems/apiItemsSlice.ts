import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction, EntityState } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

import type { CanSelectCurrentItem, ApiItem } from '../../types';
import {
  setAllFromDNDTree,
  transformToDNDTree,
} from '../../shared/DNDTreeFunctions';

import { defaultApiItems } from './defaultApiItems';

// --------------------------------------------------
//
//  Slice
//
// --------------------------------------------------

const initialState: EntityState<ApiItem> & CanSelectCurrentItem = {
  ...defaultApiItems(),
  currentId: '',
};

const apiItemsAdapter = createEntityAdapter<ApiItem>();

export const apiItemsSlice = createSlice({
  name: 'apiItems',
  initialState: apiItemsAdapter.getInitialState(initialState),
  reducers: {
    addOne: apiItemsAdapter.addOne,
    updateOne: apiItemsAdapter.updateOne,
    removeOne: apiItemsAdapter.removeOne,
    setAll: apiItemsAdapter.setAll,
    setAllFromDNDTree: setAllFromDNDTree<ApiItem>,
    setCurrentId: (state, action: PayloadAction<string>) => {
      state.currentId = action.payload;
    },
  },
});

// --------------------------------------------------
//
//  Actions
//
// --------------------------------------------------

export const {
  addOne: addOneApiItem,
  updateOne: updateOneApiItem,
  removeOne: removeOneApiItem,
  setAll: setAllApiItems,
  setAllFromDNDTree: setAllApiItemsFromDNDTree,
  setCurrentId: setCurrentApiItemId,
} = apiItemsSlice.actions;

// --------------------------------------------------
//
//  Selectors
//
// --------------------------------------------------

const apiItemsSelectors = apiItemsAdapter.getSelectors<RootState>(
  (state) => state.apiItems,
);

export const {
  selectAll: selectAllApiItems,
  selectById: selectApiItemById,
  selectIds: selectApiItemIds,
} = apiItemsSelectors;

export const selectCurrentApiItemId = (state: RootState) =>
  state.apiItems.currentId;

export const selectCurrentApiItem = (state: RootState) => {
  return selectApiItemById(state, state.apiItems.currentId);
};

export const selectAllApiItemsAsDNDTree = (state: RootState) => {
  const apiItems = selectAllApiItems(state);
  return transformToDNDTree<ApiItem>(apiItems);
};

// --------------------------------------------------
//
//  Reducer
//
// --------------------------------------------------

export default apiItemsSlice.reducer;
