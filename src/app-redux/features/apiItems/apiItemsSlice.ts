import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from '@reduxjs/toolkit';
import type { EntityId, Dictionary } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

import type { DNDTreeItem } from '../../types';

import { defaultApiItems } from './defaultApiItems';

// --------------------------------------------------

interface ApiItem {
  id: string;
  parent: string;
  isFolder: boolean;

  method?: string;
  path?: string;
  description?: string;

  headers?: Array<{ key: string; value: string }>;
  queryParams?: Array<{ key: string; value: string }>;
  pathVariables?: Array<{ key: string; value: string }>;
  body?: string;

  response?: any;
  jsonPathList?: Array<{
    name: string;
    value: string;
    example: any;
  }>;
}

type DNDTreeApiItem = DNDTreeItem<ApiItem>;

export type { ApiItem, DNDTreeApiItem };

// --------------------------------------------------

interface InitialState {
  ids: string[];
  entities: {
    [id: string]: ApiItem;
  };
  currentId: string;
}

const initialState: InitialState = {
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
    setAllFromDNDTree: (state, action: PayloadAction<DNDTreeApiItem[]>) => {
      const allItems = action.payload;

      let ids: EntityId[] & string[] = [];
      let entities: Dictionary<ApiItem> & {
        [id: string]: ApiItem;
      } = {};

      for (let i = 0; i < allItems.length; i++) {
        let item = allItems[i];

        ids.push(item.id);
        entities[item.id] = {
          ...item.data!,
          parent: item.parent,
        };
      }

      state.ids = ids;
      state.entities = entities;
    },
    setCurrentId: (state, action: PayloadAction<string>) => {
      state.currentId = action.payload;
    },
  },
});

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

  const apiItemsAsDNDTree = apiItems.map((item) => {
    return {
      id: item.id,
      parent: item.parent,
      text: item.description,
      droppable: item.isFolder,
      data: item,
    } as DNDTreeApiItem;
  });

  return apiItemsAsDNDTree;
};

// --------------------------------------------------

export default apiItemsSlice.reducer;
