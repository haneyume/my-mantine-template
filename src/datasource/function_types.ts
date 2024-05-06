import type { User, Team, TeamMember, Project } from '@/types';

// Auth

type LoginFnParams = { email: string; password: string };
type LoginFnReturn = boolean;
type LoginFn = (params: LoginFnParams) => Promise<LoginFnReturn>;

type LogoutFnParams = {};
type LogoutFnReturn = void;
type LogoutFn = (params: LogoutFnParams) => Promise<LogoutFnReturn>;

type CheckAuthedFnParams = {};
type CheckAuthedFnReturn = void;
type CheckAuthedFn = (
  params: CheckAuthedFnParams,
) => Promise<CheckAuthedFnReturn>;

// Users

type GetUsersFnParams = {};
type GetUsersFnReturn = { data: User[]; total: number };
type GetUsersFn = (params: GetUsersFnParams) => Promise<GetUsersFnReturn>;

type GetUserFnParams = { id: string };
type GetUserFnReturn = User | undefined;
type GetUserFn = (params: GetUserFnParams) => Promise<GetUserFnReturn>;

type CreateUserFnParams = { user: User };
type CreateUserFnReturn = User;
type CreateUserFn = (params: CreateUserFnParams) => Promise<CreateUserFnReturn>;

type UpdateUserFnParams = { user: User };
type UpdateUserFnReturn = User;
type UpdateUserFn = (params: UpdateUserFnParams) => Promise<UpdateUserFnReturn>;

type DeleteUserFnParams = { id: string };
type DeleteUserFnReturn = void;
type DeleteUserFn = (params: DeleteUserFnParams) => Promise<DeleteUserFnReturn>;

// Teams

type GetTeamsFnParams = {};
type GetTeamsFnReturn = { data: Team[]; total: number };
type GetTeamsFn = (params: GetTeamsFnParams) => Promise<GetTeamsFnReturn>;

type GetTeamFnParams = { id: string };
type GetTeamFnReturn = Team | undefined;
type GetTeamFn = (params: GetTeamFnParams) => Promise<GetTeamFnReturn>;

type CreateTeamFnParams = { team: Team };
type CreateTeamFnReturn = Team;
type CreateTeamFn = (params: CreateTeamFnParams) => Promise<CreateTeamFnReturn>;

type UpdateTeamFnParams = { team: Team };
type UpdateTeamFnReturn = Team;
type UpdateTeamFn = (params: UpdateTeamFnParams) => Promise<UpdateTeamFnReturn>;

type DeleteTeamFnParams = { id: string };
type DeleteTeamFnReturn = void;
type DeleteTeamFn = (params: DeleteTeamFnParams) => Promise<DeleteTeamFnReturn>;

// Team Members

type GetTeamMembersFnParams = { teamId: string };
type GetTeamMembersFnReturn = { data: TeamMember[]; total: number };
type GetTeamMembersFn = (
  params: GetTeamMembersFnParams,
) => Promise<GetTeamMembersFnReturn>;

type GetTeamMemberFnParams = { teamId: string; id: string };
type GetTeamMemberFnReturn = TeamMember | undefined;
type GetTeamMemberFn = (
  params: GetTeamMemberFnParams,
) => Promise<GetTeamMemberFnReturn>;

type CreateTeamMemberFnParams = { teamMember: TeamMember };
type CreateTeamMemberFnReturn = TeamMember;
type CreateTeamMemberFn = (
  params: CreateTeamMemberFnParams,
) => Promise<CreateTeamMemberFnReturn>;

type UpdateTeamMemberFnParams = { teamMember: TeamMember };
type UpdateTeamMemberFnReturn = TeamMember;
type UpdateTeamMemberFn = (
  params: UpdateTeamMemberFnParams,
) => Promise<UpdateTeamMemberFnReturn>;

type DeleteTeamMemberFnParams = { teamId: string; id: string };
type DeleteTeamMemberFnReturn = void;
type DeleteTeamMemberFn = (
  params: DeleteTeamMemberFnParams,
) => Promise<DeleteTeamMemberFnReturn>;

// Projects

type GetProjectsFnParams = {};
type GetProjectsFnReturn = { data: Project[]; total: number };
type GetProjectsFn = (
  params: GetProjectsFnParams,
) => Promise<GetProjectsFnReturn>;

type GetProjectFnParams = { id: string };
type GetProjectFnReturn = Project | undefined;
type GetProjectFn = (params: GetProjectFnParams) => Promise<GetProjectFnReturn>;

type CreateProjectFnParams = { project: Project };
type CreateProjectFnReturn = Project;
type CreateProjectFn = (
  params: CreateProjectFnParams,
) => Promise<CreateProjectFnReturn>;

type UpdateProjectFnParams = { project: Project };
type UpdateProjectFnReturn = Project;
type UpdateProjectFn = (
  params: UpdateProjectFnParams,
) => Promise<UpdateProjectFnReturn>;

type DeleteProjectFnParams = { id: string };
type DeleteProjectFnReturn = void;
type DeleteProjectFn = (
  params: DeleteProjectFnParams,
) => Promise<DeleteProjectFnReturn>;

// Misc

type InviteMemberFnParams = { teamId: string; email: string; role: string };
type InviteMemberFnReturn = void;
type InviteMemberFn = (
  params: InviteMemberFnParams,
) => Promise<InviteMemberFnReturn>;

//

export type {
  // Auth
  LoginFn,
  LogoutFn,
  CheckAuthedFn,
  // Users
  GetUsersFn,
  GetUserFn,
  CreateUserFn,
  UpdateUserFn,
  DeleteUserFn,
  // Teams
  GetTeamsFn,
  GetTeamFn,
  CreateTeamFn,
  UpdateTeamFn,
  DeleteTeamFn,
  // Team Members
  GetTeamMembersFn,
  GetTeamMemberFn,
  CreateTeamMemberFn,
  UpdateTeamMemberFn,
  DeleteTeamMemberFn,
  // Projects
  GetProjectsFn,
  GetProjectFn,
  CreateProjectFn,
  UpdateProjectFn,
  DeleteProjectFn,
  // Misc
  InviteMemberFn,
};

export type {
  // Auth
  LoginFnParams,
  LogoutFnParams,
  CheckAuthedFnParams,
  // Users
  GetUsersFnParams,
  GetUserFnParams,
  CreateUserFnParams,
  UpdateUserFnParams,
  DeleteUserFnParams,
  // Teams
  GetTeamsFnParams,
  GetTeamFnParams,
  CreateTeamFnParams,
  UpdateTeamFnParams,
  DeleteTeamFnParams,
  // Team Members
  GetTeamMembersFnParams,
  GetTeamMemberFnParams,
  CreateTeamMemberFnParams,
  UpdateTeamMemberFnParams,
  DeleteTeamMemberFnParams,
  // Projects
  GetProjectsFnParams,
  GetProjectFnParams,
  CreateProjectFnParams,
  UpdateProjectFnParams,
  DeleteProjectFnParams,
  // Misc
  InviteMemberFnParams,
};

export type {
  // Auth
  LoginFnReturn,
  LogoutFnReturn,
  CheckAuthedFnReturn,
  // Users
  GetUsersFnReturn,
  GetUserFnReturn,
  CreateUserFnReturn,
  UpdateUserFnReturn,
  DeleteUserFnReturn,
  // Teams
  GetTeamsFnReturn,
  GetTeamFnReturn,
  CreateTeamFnReturn,
  UpdateTeamFnReturn,
  DeleteTeamFnReturn,
  // Team Members
  GetTeamMembersFnReturn,
  GetTeamMemberFnReturn,
  CreateTeamMemberFnReturn,
  UpdateTeamMemberFnReturn,
  DeleteTeamMemberFnReturn,
  // Projects
  GetProjectsFnReturn,
  GetProjectFnReturn,
  CreateProjectFnReturn,
  UpdateProjectFnReturn,
  DeleteProjectFnReturn,
  // Misc
  InviteMemberFnReturn,
};
