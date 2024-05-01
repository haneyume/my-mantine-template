import type { User, Team, TeamMember, Project } from '@/types';

type LoginFn = (email: string, password: string) => Promise<string | undefined>;

type LogoutFn = () => Promise<void>;

type IsAuthedFn = () => Promise<string | undefined>;

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

type GetTeamMembersFn = () => Promise<TeamMember[]>;

type GetTeamMemberFn = (id: string) => Promise<TeamMember | undefined>;

type CreateTeamMemberFn = (teamMember: TeamMember) => Promise<TeamMember>;

type UpdateTeamMemberFn = (teamMember: TeamMember) => Promise<TeamMember>;

type DeleteTeamMemberFn = (id: string) => Promise<void>;

//

type GetProjectsFn = () => Promise<Project[]>;

type GetProjectFn = (id: string) => Promise<Project | undefined>;

type CreateProjectFn = (project: Project) => Promise<Project>;

type UpdateProjectFn = (project: Project) => Promise<Project>;

type DeleteProjectFn = (id: string) => Promise<void>;

//

export type {
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
};
