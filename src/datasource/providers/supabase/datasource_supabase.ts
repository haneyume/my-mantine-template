import type { Project } from '../../basic_types';
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

import { axios } from '../api/_api';

///////////////////////////////////////////////////////////////

const getUsers: GetUsersFn = async ({}) => {
  return { data: [], total: 0 };
};

const getUser: GetUserFn = async ({ id }) => {
  console.log(id);

  return undefined;
};

const createUser: CreateUserFn = async ({ user }) => {
  return user;
};

const updateUser: UpdateUserFn = async ({ user }) => {
  return user;
};

const deleteUser: DeleteUserFn = async ({ id }) => {
  console.log(id);
};

///////////////////////////////////////////////////////////////

const getProjects: GetProjectsFn = async ({}) => {
  const res = await axios.get(`/api/projects`);

  const data = res.data as Project[];

  return { data, total: data.length };
};

const getProject: GetProjectFn = async ({ id }) => {
  const res = await axios.get(`/api/projects/${id}`);

  return res.data as Project | undefined;
};

const createProject: CreateProjectFn = async ({ project }) => {
  console.log(project);

  return project;
};

const updateProject: UpdateProjectFn = async ({ project }) => {
  await axios.put(`/api/projects/${project.id}`, project);

  return project;
};

const deleteProject: DeleteProjectFn = async ({ id }) => {
  await axios.delete(`/api/projects/${id}`);
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
