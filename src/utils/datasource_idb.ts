import { openDB, type DBSchema, type IDBPDatabase } from 'idb';

import type { Project } from '@/types';

interface MyDB extends DBSchema {
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

async function init() {
  return await openDB<MyDB>('my-db', 1, {
    upgrade(db) {
      const projectStore = db.createObjectStore('projects');
      projectStore.createIndex('by_team_id', 'team_id');
      projectStore.createIndex('by_created_at', 'created_at');
    },
  });
}

async function getProjects() {
  if (!db) {
    db = await init();
  }

  return db.getAll('projects');
}

async function getProject(id: string) {
  if (!db) {
    db = await init();
  }

  return db.get('projects', id);
}

async function createProject(project: Project) {
  if (!db) {
    db = await init();
  }

  await db.put('projects', project, project.id);
}

async function updateProject(project: Project) {
  if (!db) {
    db = await init();
  }

  await db.put('projects', project, project.id);
}

async function deleteProject(id: string) {
  if (!db) {
    db = await init();
  }

  await db.delete('projects', id);
}

export { getProjects, getProject, createProject, updateProject, deleteProject };
