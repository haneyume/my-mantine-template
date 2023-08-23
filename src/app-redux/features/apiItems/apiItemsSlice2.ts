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
  selectedId: string;
}

const initialState: InitialState = {
  ...defaultApiItems(),
  selectedId: '',
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
      const apiItems = action.payload;

      const ids: EntityId[] & string[] = [];
      const entities: Dictionary<ApiItem> & {
        [id: string]: ApiItem;
      } = {};

      for (let i = 0; i < apiItems.length; i++) {
        const item = apiItems[i];

        ids.push(item.id);
        entities[item.id] = item.data!;
      }

      state.ids = ids;
      state.entities = entities;
    },
    select: (state, action: PayloadAction<string>) => {
      state.selectedId = action.payload;
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
  select: selectApiItem,
} = apiItemsSlice.actions;

// --------------------------------------------------

const apiItemsSelectors = apiItemsAdapter.getSelectors<RootState>(
  (state) => state.apiItems2,
);

export const {
  selectAll: selectAllApiItems,
  selectById: selectApiItemById,
  selectIds: selectApiItemIds,
} = apiItemsSelectors;

export const selectedApiItemId = (state: RootState) =>
  state.apiItems2.selectedId;

export const selectedApiItem = (state: RootState) => {
  return selectApiItemById(state, state.apiItems2.selectedId);
};

export const selectAllApiItemsAsDNDTree = (state: RootState) => {
  const apiItems = selectAllApiItems(state);

  const apiItemsAsDNDTree = apiItems.map((item) => {
    return {
      id: item.id,
      parent: item.parent,
      text: item.path,
      droppable: !item.isFolder,
      data: item,
    } as DNDTreeApiItem;
  });

  return apiItemsAsDNDTree;
};

// --------------------------------------------------

export default apiItemsSlice.reducer;
