import type { User, Team, TeamMember, Project } from '@/types';
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

const getUsers: GetUsersFn = async () => {
  const db = await getDB();

  return await db.getAll('users');
};

const getUser: GetUserFn = async (id: string) => {
  const db = await getDB();

  return await db.get('users', id);
};

const createUser: CreateUserFn = async (user: User) => {
  const db = await getDB();

  await db.put('users', user, user.id);

  return user;
};

const updateUser: UpdateUserFn = async (user: User) => {
  const db = await getDB();

  await db.put('users', user, user.id);

  return user;
};

const deleteUser: DeleteUserFn = async (id: string) => {
  const db = await getDB();

  await db.delete('users', id);
};

///////////////////////////////////////////////////////////////

const getTeams: GetTeamsFn = async () => {
  const db = await getDB();

  return await db.getAll('teams');
};

const getTeam: GetTeamFn = async (id: string) => {
  const db = await getDB();

  return await db.get('teams', id);
};

const createTeam: CreateTeamFn = async (team: Team) => {
  const db = await getDB();

  await db.put('teams', team, team.id);

  return team;
};

const updateTeam: UpdateTeamFn = async (team: Team) => {
  const db = await getDB();

  await db.put('teams', team, team.id);

  return team;
};

const deleteTeam: DeleteTeamFn = async (id: string) => {
  const db = await getDB();

  await db.delete('teams', id);
};

///////////////////////////////////////////////////////////////

const getTeamMembers: GetTeamMembersFn = async () => {
  const db = await getDB();

  return await db.getAll('teamMembers');
};

const getTeamMember: GetTeamMemberFn = async (id: string) => {
  const db = await getDB();

  return await db.get('teamMembers', id);
};

const createTeamMember: CreateTeamMemberFn = async (teamMember: TeamMember) => {
  const db = await getDB();

  await db.put('teamMembers', teamMember, teamMember.id);

  return teamMember;
};

const updateTeamMember: UpdateTeamMemberFn = async (teamMember: TeamMember) => {
  const db = await getDB();

  await db.put('teamMembers', teamMember, teamMember.id);

  return teamMember;
};

const deleteTeamMember: DeleteTeamMemberFn = async (id: string) => {
  const db = await getDB();

  await db.delete('teamMembers', id);
};

///////////////////////////////////////////////////////////////

const getProjects: GetProjectsFn = async () => {
  const db = await getDB();

  return await db.getAll('projects');
};

const getProject: GetProjectFn = async (id: string) => {
  const db = await getDB();

  return await db.get('projects', id);
};

const createProject: CreateProjectFn = async (project: Project) => {
  const db = await getDB();

  await db.put('projects', project, project.id);

  return project;
};

const updateProject: UpdateProjectFn = async (project: Project) => {
  const db = await getDB();

  await db.put('projects', project, project.id);

  return project;
};

const deleteProject: DeleteProjectFn = async (id: string) => {
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
