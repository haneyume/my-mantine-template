import { openDB, type DBSchema, type IDBPDatabase } from 'idb';

import type { User, Team, TeamMember, Project } from '@/types';

///////////////////////////////////////////////////////////////

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
      by_createdAt: string;
    };
  };
  teamMembers: {
    value: TeamMember;
    key: string;
    indexes: {
      by_createdAt: string;
    };
  };
  projects: {
    value: Project;
    key: string;
    indexes: {
      by_teamId: string;
      by_createdAt: string;
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
      teamStore.createIndex('by_createdAt', 'createdAt');

      const teamMemberStore = db.createObjectStore('teamMembers');
      teamMemberStore.createIndex('by_createdAt', 'createdAt');

      const projectStore = db.createObjectStore('projects');
      projectStore.createIndex('by_teamId', 'teamId');
      projectStore.createIndex('by_createdAt', 'createdAt');

      // fake data
      {
        const defaultUserId = crypto.randomUUID();
        const defaultTeamId = crypto.randomUUID();
        const defaultTeamMemberId = crypto.randomUUID();

        const defaultUser: User = {
          id: defaultUserId,
          avatar: import.meta.env.VITE_FAKE_USER_AVATAR,
          email: import.meta.env.VITE_FAKE_USER_EMAIL,
          nickname: import.meta.env.VITE_FAKE_USER_NAME,
          introduction: '',
        };

        const defaultTeam: Team = {
          id: defaultTeamId,
          name: 'Default Team',
          description: '',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        const defaultTeamMember: TeamMember = {
          id: defaultTeamMemberId,
          teamId: defaultTeamId,
          userId: defaultUserId,
          role: 'owner',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          user: defaultUser,
        };

        userStore.add(defaultUser, defaultUserId);
        teamStore.add(defaultTeam, defaultTeamId);
        teamMemberStore.add(defaultTeamMember, defaultTeamMemberId);
      }
    },
  });
}

async function getDB() {
  if (!db) {
    db = await initDB();
  }

  return db;
}

export { getDB };

console.log('🐳', 'using provider - idb');
