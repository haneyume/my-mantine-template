interface BasicItem {
  id: string;
  parent: string;
  name: string;
  isFolder: boolean;
}

interface ApiItem extends BasicItem {
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

export type { ApiItem, BasicItem };
