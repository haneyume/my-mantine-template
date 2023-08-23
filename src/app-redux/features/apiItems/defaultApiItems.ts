import { v4 as uuidv4 } from 'uuid';

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

export const defaultApiItems: () => {
  ids: string[];
  entities: { [id: string]: ApiItem };
} = () => {
  const folderId = uuidv4();

  const data = [
    {
      id: folderId,
      parent: 'root',
      isFolder: true,
      description: 'Users',
    },
    {
      id: uuidv4(),
      parent: folderId,
      isFolder: false,

      method: 'GET',
      path: 'https://jsonplaceholder.typicode.com/users',
      description: 'Get users',
    },
    {
      id: uuidv4(),
      parent: folderId,
      isFolder: false,

      method: 'GET',
      path: 'https://jsonplaceholder.typicode.com/users/1',
      description: 'Get user 1',
    },
    {
      id: uuidv4(),
      parent: folderId,
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
