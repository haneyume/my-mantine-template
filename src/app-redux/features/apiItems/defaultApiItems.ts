import type { EntityState } from '@reduxjs/toolkit';

import { v4 as uuidv4 } from 'uuid';

import type { ApiItem } from '../../types';

export const defaultApiItems: () => EntityState<ApiItem> = () => {
  const folderId = uuidv4();

  const data = [
    {
      id: folderId,
      parent: 'root',
      name: 'Users',
      isFolder: true,
    },
    {
      id: uuidv4(),
      parent: folderId,
      name: 'Get users',
      isFolder: false,

      method: 'GET',
      path: 'https://jsonplaceholder.typicode.com/users',
      description: 'Get users',
    },
    {
      id: uuidv4(),
      parent: folderId,
      name: 'Get user 1',
      isFolder: false,

      method: 'GET',
      path: 'https://jsonplaceholder.typicode.com/users/1',
      description: 'Get user 1',
    },
    {
      id: uuidv4(),
      parent: folderId,
      name: 'Create a user',
      isFolder: false,

      method: 'POST',
      path: 'https://jsonplaceholder.typicode.com/users',
      description: 'Create a user',
    },
  ];

  return {
    ids: data.map((item) => item.id),
    entities: data.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {} as any),
  };
};
