import type {
  PayloadAction,
  EntityId,
  EntityState,
  Dictionary,
} from '@reduxjs/toolkit';
import type { DNDTreeItem, BasicItem } from '../types';

export function setAllFromDNDTree<T extends BasicItem>(
  state: EntityState<T>,
  action: PayloadAction<DNDTreeItem<T>[]>,
) {
  const allItems = action.payload;

  let ids: EntityId[] & string[] = [];
  let entities: Dictionary<T> & {
    [id: string]: T;
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
}

export function transformToDNDTree<T extends BasicItem>(data: T[]) {
  return data.map((item) => {
    return {
      id: item.id,
      parent: item.parent,
      text: item.name,
      droppable: item.isFolder,
      data: item,
    } as DNDTreeItem<T>;
  });
}
