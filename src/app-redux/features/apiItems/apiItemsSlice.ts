import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

import type { DNDTreeApiItem, ApiItem } from '../../types';
import {
  defaultApiItems,
  createNewApiItemFolder,
  createNewApiItem,
} from '../../types';

interface InitialState {
  items: DNDTreeApiItem[];
  selectedId: string;
  currentItem: DNDTreeApiItem | undefined;
}

const initialState: InitialState = {
  items: defaultApiItems(),
  selectedId: '',
  currentItem: undefined,
};

export const apiItemsSlice = createSlice({
  name: 'apiItems',
  initialState,
  reducers: {
    addOne: (
      state,
      action: PayloadAction<{ name: string; type: 'item' | 'folder' }>,
    ) => {
      const { type } = action.payload;

      if (type === 'folder') {
        state.items.push(createNewApiItemFolder());
      } else if (type === 'item') {
        state.items.push(createNewApiItem());
      }
    },
    updateOne: (state, action: PayloadAction<Partial<ApiItem>>) => {
      const { items, selectedId } = state;
      const partialData = action.payload;

      const index = items.findIndex((item) => item.id === selectedId);
      if (index === -1) {
        return;
      }

      if (state.items[index].data) {
        state.items[index].data = {
          ...state.items[index].data!,
          ...partialData,
        };
      }

      state.currentItem = state.items[index];
    },
    setAll: (state, action: PayloadAction<DNDTreeApiItem[]>) => {
      state.items = action.payload;
    },
    select: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      state.selectedId = id;
      state.currentItem = state.items.find((item) => item.id === id);
    },
  },
});

// --------------------------------------------------

export const {
  addOne: addOneApiItem,
  updateOne: updateOneApiItem,
  setAll: setAllApiItems,
  select: selectApiItem,
} = apiItemsSlice.actions;

// --------------------------------------------------

export const allApiItems = (state: RootState) => state.apiItems.items;

export const selectedApiItem = createSelector(
  (state: RootState) => state.apiItems.items,
  (state: RootState) => state.apiItems.selectedId,
  (items, selectedId) => items.find((item) => item.id === selectedId),
);

// --------------------------------------------------

export default apiItemsSlice.reducer;
