import { openDB, type DBSchema, type IDBPDatabase } from 'idb';

import type { User, Team, Project } from '@/types';

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

      const projectStore = db.createObjectStore('projects');
      projectStore.createIndex('by_team_id', 'team_id');
      projectStore.createIndex('by_created_at', 'created_at');
    },
  });
}

///////////////////////////////////////////////////////////////

async function login(
  email: string,
  password: string,
): Promise<string | undefined> {
  if (!db) {
    db = await initDB();
  }

  // fake auth
  if (email !== 'test@mail.com' || password !== '123456') {
    return undefined;
  }

  await db.put('auth', email, email);

  return email;
}

async function logout(): Promise<void> {
  if (!db) {
    db = await initDB();
  }

  await db.clear('auth');
}

async function isAuthed(): Promise<string | undefined> {
  if (!db) {
    db = await initDB();
  }

  const data = await db.getAll('auth');

  if (data.length === 0) {
    return undefined;
  }

  return data[0];
}

///////////////////////////////////////////////////////////////

async function getUsers(): Promise<User[]> {
  if (!db) {
    db = await initDB();
  }

  return await db.getAll('users');
}

async function getUser(id: string): Promise<User | undefined> {
  if (!db) {
    db = await initDB();
  }

  // fake user
  const user = await db.get('users', id);
  if (!user) {
    return {
      id: id,
      email: id,
      nickname: 'Test User',
      avatar: '',
    };
  }

  return user;
}

async function createUser(user: User): Promise<User> {
  if (!db) {
    db = await initDB();
  }

  await db.put('users', user, user.id);

  return user;
}

async function updateUser(user: User): Promise<void> {
  if (!db) {
    db = await initDB();
  }

  await db.put('users', user, user.id);
}

async function deleteUser(id: string): Promise<void> {
  if (!db) {
    db = await initDB();
  }

  await db.delete('users', id);
}

///////////////////////////////////////////////////////////////

async function getTeams(): Promise<Team[]> {
  if (!db) {
    db = await initDB();
  }

  return await db.getAll('teams');
}

async function getTeam(id: string): Promise<Team | undefined> {
  if (!db) {
    db = await initDB();
  }

  return await db.get('teams', id);
}

async function createTeam(team: Team): Promise<Team> {
  if (!db) {
    db = await initDB();
  }

  await db.put('teams', team, team.id);

  return team;
}

async function updateTeam(team: Team): Promise<void> {
  if (!db) {
    db = await initDB();
  }

  await db.put('teams', team, team.id);
}

async function deleteTeam(id: string): Promise<void> {
  if (!db) {
    db = await initDB();
  }

  await db.delete('teams', id);
}

///////////////////////////////////////////////////////////////

async function getProjects(): Promise<Project[]> {
  if (!db) {
    db = await initDB();
  }

  return await db.getAll('projects');
}

async function getProject(id: string): Promise<Project | undefined> {
  if (!db) {
    db = await initDB();
  }

  return await db.get('projects', id);
}

async function createProject(project: Project): Promise<Project> {
  if (!db) {
    db = await initDB();
  }

  await db.put('projects', project, project.id);

  return project;
}

async function updateProject(project: Project): Promise<void> {
  if (!db) {
    db = await initDB();
  }

  await db.put('projects', project, project.id);
}

async function deleteProject(id: string): Promise<void> {
  if (!db) {
    db = await initDB();
  }

  await db.delete('projects', id);
}

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
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
};
