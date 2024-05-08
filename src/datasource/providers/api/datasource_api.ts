import type { Project } from '@/types';
import type {
  GetUsersFn,
  GetUserFn,
  CreateUserFn,
  UpdateUserFn,
  DeleteUserFn,
  //
  GetTeamsFn,
  GetTeamFn,
  CreateTeamFn,
  UpdateTeamFn,
  DeleteTeamFn,
  //
  GetTeamMembersFn,
  GetTeamMemberFn,
  CreateTeamMemberFn,
  UpdateTeamMemberFn,
  DeleteTeamMemberFn,
  //
  GetProjectsFn,
  GetProjectFn,
  CreateProjectFn,
  UpdateProjectFn,
  DeleteProjectFn,
} from '../../function_types';

import { axios } from './_api';

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

const getTeams: GetTeamsFn = async ({}) => {
  return { data: [], total: 0 };
};

const getTeam: GetTeamFn = async ({ id }) => {
  console.log(id);

  return undefined;
};

const createTeam: CreateTeamFn = async ({ team }) => {
  return team;
};

const updateTeam: UpdateTeamFn = async ({ team }) => {
  return team;
};

const deleteTeam: DeleteTeamFn = async ({ id }) => {
  console.log(id);
};

///////////////////////////////////////////////////////////////

const getTeamMembers: GetTeamMembersFn = async ({ teamId }) => {
  console.log(teamId);

  return { data: [], total: 0 };
};

const getTeamMember: GetTeamMemberFn = async ({ teamId, id }) => {
  console.log(teamId, id);

  return undefined;
};

const createTeamMember: CreateTeamMemberFn = async ({ teamMember }) => {
  return teamMember;
};

const updateTeamMember: UpdateTeamMemberFn = async ({ teamMember }) => {
  return teamMember;
};

const deleteTeamMember: DeleteTeamMemberFn = async ({ teamId, id }) => {
  console.log(teamId, id);
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
  getTeams,
  getTeam,
  createTeam,
  updateTeam,
  deleteTeam,
  //
  getTeamMembers,
  getTeamMember,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
  //
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
};
