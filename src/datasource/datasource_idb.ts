import { openDB, type DBSchema, type IDBPDatabase } from 'idb';

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

interface MyDB extends DBSchema {
  auth: {
    value: string;
    key: string;
  };
  users: {
    value: User;
    key: string;
  };
  teams: {
    value: Team;
    key: string;
    indexes: {
      by_created_at: string;
    };
  };
  teamMembers: {
    value: TeamMember;
    key: string;
    indexes: {
      by_created_at: string;
    };
  };
  projects: {
    value: Project;
    key: string;
    indexes: {
      by_team_id: string;
      by_created_at: string;
    };
  };
}

let db: IDBPDatabase<MyDB> | undefined = undefined;

async function initDB() {
  return await openDB<MyDB>('my-db', 1, {
    upgrade(db) {
      const authStore = db.createObjectStore('auth');
      console.log(authStore);

      const userStore = db.createObjectStore('users');
      console.log(userStore);

      const teamStore = db.createObjectStore('teams');
      teamStore.createIndex('by_created_at', 'created_at');

      const teamMemberStore = db.createObjectStore('teamMembers');
      teamMemberStore.createIndex('by_created_at', 'created_at');

      const projectStore = db.createObjectStore('projects');
      projectStore.createIndex('by_team_id', 'team_id');
      projectStore.createIndex('by_created_at', 'created_at');
    },
  });
}

///////////////////////////////////////////////////////////////

const login: LoginFn = async (email: string, password: string) => {
  if (!db) {
    db = await initDB();
  }

  // fake auth
  if (email !== 'test@mail.com' || password !== '123456') {
    return undefined;
  }

  await db.put('auth', email, email);

  return email;
};

const logout: LogoutFn = async () => {
  if (!db) {
    db = await initDB();
  }

  await db.clear('auth');
};

const isAuthed: IsAuthedFn = async () => {
  if (!db) {
    db = await initDB();
  }

  const data = await db.getAll('auth');

  if (data.length === 0) {
    return undefined;
  }

  return data[0];
};

///////////////////////////////////////////////////////////////

const getUsers: GetUsersFn = async () => {
  if (!db) {
    db = await initDB();
  }

  return await db.getAll('users');
};

const getUser: GetUserFn = async (id: string) => {
  if (!db) {
    db = await initDB();
  }

  // fake user
  const user = await db.get('users', id);
  if (!user) {
    return {
      id: id,
      avatar: '',
      email: id,
      nickname: 'Test User',
      introduction: '',
    };
  }

  return user;
};

const createUser: CreateUserFn = async (user: User) => {
  if (!db) {
    db = await initDB();
  }

  await db.put('users', user, user.id);

  return user;
};

const updateUser: UpdateUserFn = async (user: User) => {
  if (!db) {
    db = await initDB();
  }

  await db.put('users', user, user.id);

  return user;
};

const deleteUser: DeleteUserFn = async (id: string) => {
  if (!db) {
    db = await initDB();
  }

  await db.delete('users', id);
};

///////////////////////////////////////////////////////////////

const getTeams: GetTeamsFn = async () => {
  if (!db) {
    db = await initDB();
  }

  return await db.getAll('teams');
};

const getTeam: GetTeamFn = async (id: string) => {
  if (!db) {
    db = await initDB();
  }

  return await db.get('teams', id);
};

const createTeam: CreateTeamFn = async (team: Team) => {
  if (!db) {
    db = await initDB();
  }

  await db.put('teams', team, team.id);

  return team;
};

const updateTeam: UpdateTeamFn = async (team: Team) => {
  if (!db) {
    db = await initDB();
  }

  await db.put('teams', team, team.id);

  return team;
};

const deleteTeam: DeleteTeamFn = async (id: string) => {
  if (!db) {
    db = await initDB();
  }

  await db.delete('teams', id);
};

///////////////////////////////////////////////////////////////

const getTeamMembers: GetTeamMembersFn = async () => {
  if (!db) {
    db = await initDB();
  }

  return await db.getAll('teamMembers');
};

const getTeamMember: GetTeamMemberFn = async (id: string) => {
  if (!db) {
    db = await initDB();
  }

  return await db.get('teamMembers', id);
};

const createTeamMember: CreateTeamMemberFn = async (teamMember: TeamMember) => {
  if (!db) {
    db = await initDB();
  }

  await db.put('teamMembers', teamMember, teamMember.id);

  return teamMember;
};

const updateTeamMember: UpdateTeamMemberFn = async (teamMember: TeamMember) => {
  if (!db) {
    db = await initDB();
  }

  await db.put('teamMembers', teamMember, teamMember.id);

  return teamMember;
};

const deleteTeamMember: DeleteTeamMemberFn = async (id: string) => {
  if (!db) {
    db = await initDB();
  }

  await db.delete('teamMembers', id);
};

///////////////////////////////////////////////////////////////

const getProjects: GetProjectsFn = async () => {
  if (!db) {
    db = await initDB();
  }

  return await db.getAll('projects');
};

const getProject: GetProjectFn = async (id: string) => {
  if (!db) {
    db = await initDB();
  }

  return await db.get('projects', id);
};

const createProject: CreateProjectFn = async (project: Project) => {
  if (!db) {
    db = await initDB();
  }

  await db.put('projects', project, project.id);

  return project;
};

const updateProject: UpdateProjectFn = async (project: Project) => {
  if (!db) {
    db = await initDB();
  }

  await db.put('projects', project, project.id);

  return project;
};

const deleteProject: DeleteProjectFn = async (id: string) => {
  if (!db) {
    db = await initDB();
  }

  await db.delete('projects', id);
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
