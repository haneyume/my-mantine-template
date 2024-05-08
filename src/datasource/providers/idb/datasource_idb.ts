import type {} from '../../basic_types';
import type {
  GetUsersFn,
  GetUserFn,
  CreateUserFn,
  UpdateUserFn,
  DeleteUserFn,
  //
  GetProjectsFn,
  GetProjectFn,
  CreateProjectFn,
  UpdateProjectFn,
  DeleteProjectFn,
} from '../../function_types';

import { getDB } from './_idb';

///////////////////////////////////////////////////////////////

const getUsers: GetUsersFn = async ({}) => {
  const db = await getDB();

  const data = await db.getAll('users');

  return { data, total: data.length };
};

const getUser: GetUserFn = async ({ id }) => {
  const db = await getDB();

  return await db.get('users', id);
};

const createUser: CreateUserFn = async ({ user }) => {
  const db = await getDB();

  await db.put('users', user, user.id);

  return user;
};

const updateUser: UpdateUserFn = async ({ user }) => {
  const db = await getDB();

  await db.put('users', user, user.id);

  return user;
};

const deleteUser: DeleteUserFn = async ({ id }) => {
  const db = await getDB();

  await db.delete('users', id);
};

///////////////////////////////////////////////////////////////

const getProjects: GetProjectsFn = async ({}) => {
  const db = await getDB();

  const data = await db.getAll('projects');

  return { data, total: data.length };
};

const getProject: GetProjectFn = async ({ id }) => {
  const db = await getDB();

  return await db.get('projects', id);
};

const createProject: CreateProjectFn = async ({ project }) => {
  const db = await getDB();

  await db.put('projects', project, project.id);

  return project;
};

const updateProject: UpdateProjectFn = async ({ project }) => {
  const db = await getDB();

  await db.put('projects', project, project.id);

  return project;
};

const deleteProject: DeleteProjectFn = async ({ id }) => {
  const db = await getDB();

  await db.delete('projects', id);
};

///////////////////////////////////////////////////////////////

export {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  //
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
};
