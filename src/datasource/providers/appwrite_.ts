import {
  Client,
  Account,
  Teams,
  Databases,
  ID,
  Role,
  Permission,
} from 'appwrite';

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const teams = new Teams(client);
export const databases = new Databases(client);

export { ID, Role, Permission };

export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
export const PROJECTS_COLLECTION_ID = import.meta.env
  .VITE_APPWRITE_PROJECTS_COLLECTION_ID;
