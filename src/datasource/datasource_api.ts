import axios from 'axios';

import type { User, Team, TeamMember, Project } from '@/types';
import type {
  LoginFn,
  LogoutFn,
  IsAuthedFn,
  //
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
} from './datasource_types';

axios.defaults.baseURL = 'http://localhost:3000';

///////////////////////////////////////////////////////////////

const login: LoginFn = async (email: string, password: string) => {
  console.log(email, password);

  return undefined;
};

const logout: LogoutFn = async () => {};

const isAuthed: IsAuthedFn = async () => {
  return undefined;
};

///////////////////////////////////////////////////////////////

const getUsers: GetUsersFn = async () => {
  return [];
};

const getUser: GetUserFn = async (id: string) => {
  console.log(id);

  return undefined;
};

const createUser: CreateUserFn = async (user: User) => {
  return user;
};

const updateUser: UpdateUserFn = async (user: User) => {
  return user;
};

const deleteUser: DeleteUserFn = async (id: string) => {
  console.log(id);
};

///////////////////////////////////////////////////////////////

const getTeams: GetTeamsFn = async () => {
  return [];
};

const getTeam: GetTeamFn = async (id: string) => {
  console.log(id);

  return undefined;
};

const createTeam: CreateTeamFn = async (team: Team) => {
  return team;
};

const updateTeam: UpdateTeamFn = async (team: Team) => {
  return team;
};

const deleteTeam: DeleteTeamFn = async (id: string) => {
  console.log(id);
};

///////////////////////////////////////////////////////////////

const getTeamMembers: GetTeamMembersFn = async () => {
  return [];
};

const getTeamMember: GetTeamMemberFn = async (id: string) => {
  console.log(id);

  return undefined;
};

const createTeamMember: CreateTeamMemberFn = async (teamMember: TeamMember) => {
  return teamMember;
};

const updateTeamMember: UpdateTeamMemberFn = async (teamMember: TeamMember) => {
  return teamMember;
};

const deleteTeamMember: DeleteTeamMemberFn = async (id: string) => {
  console.log(id);
};

///////////////////////////////////////////////////////////////

const getProjects: GetProjectsFn = async () => {
  const res = await axios.get(`/api/projects`);

  return res.data as Project[];
};

const getProject: GetProjectFn = async (id: string) => {
  const res = await axios.get(`/api/projects/${id}`);

  return res.data as Project | undefined;
};

const createProject: CreateProjectFn = async (project: Project) => {
  console.log(project);

  return project;
};

const updateProject: UpdateProjectFn = async (project: Project) => {
  await axios.put(`/api/projects/${project.id}`, project);

  return project;
};

const deleteProject: DeleteProjectFn = async (id: string) => {
  await axios.delete(`/api/projects/${id}`);
};

///////////////////////////////////////////////////////////////

export {
  login,
  logout,
  isAuthed,
  //
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
