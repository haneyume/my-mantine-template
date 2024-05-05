import type { User, Team, TeamMember, Project } from '@/types';

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

//

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

//

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

//

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

//

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

export type {
  LoginFnReturn,
  LogoutFnReturn,
  CheckAuthedFnReturn,
  //
  GetUsersFnReturn,
  GetUserFnReturn,
  CreateUserFnReturn,
  UpdateUserFnReturn,
  DeleteUserFnReturn,
  //
  GetTeamsFnReturn,
  GetTeamFnReturn,
  CreateTeamFnReturn,
  UpdateTeamFnReturn,
  DeleteTeamFnReturn,
  //
  GetTeamMembersFnReturn,
  GetTeamMemberFnReturn,
  CreateTeamMemberFnReturn,
  UpdateTeamMemberFnReturn,
  DeleteTeamMemberFnReturn,
  //
  GetProjectsFnReturn,
  GetProjectFnReturn,
  CreateProjectFnReturn,
  UpdateProjectFnReturn,
  DeleteProjectFnReturn,
};
