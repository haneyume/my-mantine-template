import type {} from '@/types';
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
} from './function_types';

import { getDB } from './providers/idb_';

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

const getTeams: GetTeamsFn = async ({}) => {
  const db = await getDB();

  const data = await db.getAll('teams');

  return { data, total: data.length };
};

const getTeam: GetTeamFn = async ({ id }) => {
  const db = await getDB();

  return await db.get('teams', id);
};

const createTeam: CreateTeamFn = async ({ team }) => {
  const db = await getDB();

  await db.put('teams', team, team.id);

  return team;
};

const updateTeam: UpdateTeamFn = async ({ team }) => {
  const db = await getDB();

  await db.put('teams', team, team.id);

  return team;
};

const deleteTeam: DeleteTeamFn = async ({ id }) => {
  const db = await getDB();

  await db.delete('teams', id);
};

///////////////////////////////////////////////////////////////

const getTeamMembers: GetTeamMembersFn = async ({ teamId }) => {
  const db = await getDB();

  let data = await db.getAll('teamMembers');

  data = data.filter((teamMember) => teamMember.teamId === teamId);

  return { data, total: data.length };
};

const getTeamMember: GetTeamMemberFn = async ({ teamId, id }) => {
  const db = await getDB();

  return await db.get('teamMembers', `${teamId}-${id}`);
};

const createTeamMember: CreateTeamMemberFn = async ({ teamMember }) => {
  const db = await getDB();

  await db.put(
    'teamMembers',
    teamMember,
    `${teamMember.teamId}-${teamMember.id}`,
  );

  return teamMember;
};

const updateTeamMember: UpdateTeamMemberFn = async ({ teamMember }) => {
  const db = await getDB();

  await db.put(
    'teamMembers',
    teamMember,
    `${teamMember.teamId}-${teamMember.id}`,
  );

  return teamMember;
};

const deleteTeamMember: DeleteTeamMemberFn = async ({ teamId, id }) => {
  const db = await getDB();

  await db.delete('teamMembers', `${teamId}-${id}`);
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
