import { describe, it, expect } from 'vitest';

import { store } from '../app-redux';

describe('store', () => {
  it('should be defined', () => {
    expect(store).toBeDefined();
  });

  it('should have a dispatch method', () => {
    expect(store.dispatch).toBeDefined();
  });
});
