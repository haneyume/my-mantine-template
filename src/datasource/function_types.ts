import type { User, Team, TeamMember, Project } from '@/types';

type AuthLoginFn = (email: string, password: string) => Promise<boolean>;

type AuthLogoutFn = () => Promise<void>;

type AuthCheckAuthedFn = () => Promise<void>;

//

type LoginFn = (email: string, password: string) => Promise<boolean>;

type LogoutFn = () => Promise<void>;

type CheckAuthedFn = () => Promise<void>;

//

type GetUsersFn = () => Promise<User[]>;

type GetUserFn = (id: string) => Promise<User | undefined>;

type CreateUserFn = (user: User) => Promise<User>;

type UpdateUserFn = (user: User) => Promise<User>;

type DeleteUserFn = (id: string) => Promise<void>;

//

type GetTeamsFn = () => Promise<Team[]>;

type GetTeamFn = (id: string) => Promise<Team | undefined>;

type CreateTeamFn = (team: Team) => Promise<Team>;

type UpdateTeamFn = (team: Team) => Promise<Team>;

type DeleteTeamFn = (id: string) => Promise<void>;

//

type GetTeamMembersFn = (teamId: string) => Promise<TeamMember[]>;

type GetTeamMemberFn = (
  teamId: string,
  id: string,
) => Promise<TeamMember | undefined>;

type CreateTeamMemberFn = (teamMember: TeamMember) => Promise<TeamMember>;

type UpdateTeamMemberFn = (teamMember: TeamMember) => Promise<TeamMember>;

type DeleteTeamMemberFn = (teamId: string, id: string) => Promise<void>;

//

type GetProjectsFn = () => Promise<Project[]>;

type GetProjectFn = (id: string) => Promise<Project | undefined>;

type CreateProjectFn = (project: Project) => Promise<Project>;

type UpdateProjectFn = (project: Project) => Promise<Project>;

type DeleteProjectFn = (id: string) => Promise<void>;

//

export type {
  AuthLoginFn,
  AuthLogoutFn,
  AuthCheckAuthedFn,
  //
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
