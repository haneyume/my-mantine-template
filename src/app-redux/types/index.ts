import { v4 as uuidv4 } from 'uuid';

interface DNDTreeItem<T> {
  id: string;
  parent: string;
  text: string;
  droppable?: boolean;
  data?: T;
}

// ----------------------------------------------

interface ApiItem {
  method: string;
  path: string;
  description: string;

  headers: Array<{ key: string; value: string }>;
  queryParams: Array<{ key: string; value: string }>;
  pathVariables: Array<{ key: string; value: string }>;
  body: string;

  response: any;
  jsonPathList: Array<{
    name: string;
    value: string;
    example: any;
  }>;
}

type DNDTreeApiItem = DNDTreeItem<ApiItem>;

// ----------------------------------------------

export type { DNDTreeItem, DNDTreeApiItem, ApiItem };

// ----------------------------------------------

export const createNewApiItemFolder: () => DNDTreeApiItem = () => {
  return {
    id: uuidv4(),
    parent: 'root',
    text: 'New Folder',
    droppable: true,
  };
};

export const createNewApiItem: () => DNDTreeApiItem = () => {
  return {
    id: uuidv4(),
    parent: 'root',
    text: 'New Api',
    droppable: false,
    data: {
      method: 'GET',
      path: 'https://example.com/api/v1/new-api',
      description: 'New Api',
      headers: [],
      queryParams: [],
      pathVariables: [],
      body: '',
      response: {},
      jsonPathList: [],
    },
  };
};

// ----------------------------------------------

export const defaultApiItems: () => DNDTreeApiItem[] = () => {
  const folderId = uuidv4();

  return [
    {
      id: folderId,
      parent: 'root',
      text: 'Users',
      droppable: true,
    },
    {
      id: uuidv4(),
      parent: folderId,
      text: 'GET users',
      droppable: false,
      data: {
        method: 'GET',
        path: 'https://jsonplaceholder.typicode.com/users',
        description: 'Get users',
        headers: [],
        queryParams: [],
        pathVariables: [],
        body: '',
        response: {},
        jsonPathList: [],
      },
    },
    {
      id: uuidv4(),
      parent: folderId,
      text: 'GET user 1',
      droppable: false,
      data: {
        method: 'GET',
        path: 'https://jsonplaceholder.typicode.com/users/1',
        description: 'Get user 1',
        headers: [],
        queryParams: [],
        pathVariables: [],
        body: '',
        response: {},
        jsonPathList: [],
      },
    },
    {
      id: uuidv4(),
      parent: folderId,
      text: 'Create a user',
      droppable: false,
      data: {
        method: 'POST',
        path: 'https://jsonplaceholder.typicode.com/users',
        description: 'Create a user',
        headers: [],
        queryParams: [],
        pathVariables: [],
        body: '',
        response: {},
        jsonPathList: [],
      },
    },
  ];
};
