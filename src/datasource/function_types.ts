import type { User, Team, TeamMember, Project } from '@/types';

type LoginFnParams = { email: string; password: string };
type LoginFn = (params: LoginFnParams) => Promise<boolean>;

type LogoutFnParams = {};
type LogoutFn = (params: LogoutFnParams) => Promise<void>;

type CheckAuthedFnParams = {};
type CheckAuthedFn = (params: CheckAuthedFnParams) => Promise<void>;

//

type GetUsersFnParams = {};
type GetUsersFn = (params: GetUsersFnParams) => Promise<User[]>;

type GetUserFnParams = { id: string };
type GetUserFn = (params: GetUserFnParams) => Promise<User | undefined>;

type CreateUserFnParams = { user: User };
type CreateUserFn = (params: CreateUserFnParams) => Promise<User>;

type UpdateUserFnParams = { user: User };
type UpdateUserFn = (params: UpdateUserFnParams) => Promise<User>;

type DeleteUserFnParams = { id: string };
type DeleteUserFn = (params: DeleteUserFnParams) => Promise<void>;

//

type GetTeamsFnParams = {};
type GetTeamsFn = (params: GetTeamsFnParams) => Promise<Team[]>;

type GetTeamFnParams = { id: string };
type GetTeamFn = (params: GetTeamFnParams) => Promise<Team | undefined>;

type CreateTeamFnParams = { team: Team };
type CreateTeamFn = (params: CreateTeamFnParams) => Promise<Team>;

type UpdateTeamFnParams = { team: Team };
type UpdateTeamFn = (params: UpdateTeamFnParams) => Promise<Team>;

type DeleteTeamFnParams = { id: string };
type DeleteTeamFn = (params: DeleteTeamFnParams) => Promise<void>;

//

type GetTeamMembersFnParams = { teamId: string };
type GetTeamMembersFn = (
  params: GetTeamMembersFnParams,
) => Promise<TeamMember[]>;

type GetTeamMemberFnParams = { teamId: string; id: string };
type GetTeamMemberFn = (
  params: GetTeamMemberFnParams,
) => Promise<TeamMember | undefined>;

type CreateTeamMemberFnParams = { teamMember: TeamMember };
type CreateTeamMemberFn = (
  params: CreateTeamMemberFnParams,
) => Promise<TeamMember>;

type UpdateTeamMemberFnParams = { teamMember: TeamMember };
type UpdateTeamMemberFn = (
  params: UpdateTeamMemberFnParams,
) => Promise<TeamMember>;

type DeleteTeamMemberFnParams = { teamId: string; id: string };
type DeleteTeamMemberFn = (params: DeleteTeamMemberFnParams) => Promise<void>;

//

type GetProjectsFnParams = {};
type GetProjectsFn = (params: GetProjectsFnParams) => Promise<Project[]>;

type GetProjectFnParams = { id: string };
type GetProjectFn = (
  params: GetProjectFnParams,
) => Promise<Project | undefined>;

type CreateProjectFnParams = { project: Project };
type CreateProjectFn = (params: CreateProjectFnParams) => Promise<Project>;

type UpdateProjectFnParams = { project: Project };
type UpdateProjectFn = (params: UpdateProjectFnParams) => Promise<Project>;

type DeleteProjectFnParams = { id: string };
type DeleteProjectFn = (params: DeleteProjectFnParams) => Promise<void>;

//

export type {
  LoginFn,
  LogoutFn,
  CheckAuthedFn,
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
};

export type {
  LoginFnParams,
  LogoutFnParams,
  CheckAuthedFnParams,
  //
  GetUsersFnParams,
  GetUserFnParams,
  CreateUserFnParams,
  UpdateUserFnParams,
  DeleteUserFnParams,
  //
  GetTeamsFnParams,
  GetTeamFnParams,
  CreateTeamFnParams,
  UpdateTeamFnParams,
  DeleteTeamFnParams,
  //
  GetTeamMembersFnParams,
  GetTeamMemberFnParams,
  CreateTeamMemberFnParams,
  UpdateTeamMemberFnParams,
  DeleteTeamMemberFnParams,
  //
  GetProjectsFnParams,
  GetProjectFnParams,
  CreateProjectFnParams,
  UpdateProjectFnParams,
  DeleteProjectFnParams,
};
