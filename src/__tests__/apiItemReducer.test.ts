import { describe, it, expect, beforeAll } from 'vitest';

import {
  store,
  addOneApiItem,
  updateOneApiItem,
  setAllApiItems,
  selectApiItem,
} from '../app-redux';

describe('apiItem', () => {
  beforeAll(() => {
    store.subscribe(() => {
      console.log(store.getState().apiItems);
    });
  });

  it('new item', () => {
    const count = store.getState().apiItems.items.length;

    store.dispatch(addOneApiItem({ name: 'test', type: 'item' }));

    expect(store.getState().apiItems.items.length).toBe(count + 1);
  });

  it('update current item', () => {
    store.dispatch(updateOneApiItem({ method: 'GET' }));
  });

  it('select item', () => {
    store.dispatch(selectApiItem('test'));
  });

  it('update all items', () => {
    store.dispatch(setAllApiItems([]));

    expect(store.getState().apiItems.items.length).toBe(0);
  });
});
