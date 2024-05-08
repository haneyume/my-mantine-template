import type { User, Project } from '../../basic_types';
import type {
  GetUsersFn,
  GetUserFn,
  CreateUserFn,
  UpdateUserFn,
  DeleteUserFn,
  //
  GetProjectsFn,
  GetProjectFn,
  CreateProjectFn,
  UpdateProjectFn,
  DeleteProjectFn,
} from '../../function_types';

import {
  account,
  databases,
  ID,
  Role,
  Permission,
  DATABASE_ID,
  PROJECTS_COLLECTION_ID,
} from './_appwrite';

///////////////////////////////////////////////////////////////

const getUsers: GetUsersFn = async ({}) => {
  throw new Error('Not implemented');
};

const getUser: GetUserFn = async ({}) => {
  // get current user instead of user by id

  const data = await account.get();

  return {
    id: data.$id,
    avatar: data.prefs.avatar || '',
    email: data.email,
    nickname: data.name,
    introduction: data.prefs.intro || '',
  } as User;
};

const createUser: CreateUserFn = async ({}) => {
  throw new Error('Not implemented');
};

const updateUser: UpdateUserFn = async ({ user }) => {
  let data = await account.updateName(user.nickname);

  let prefs: Record<string, any> = {};
  if (user.avatar) {
    prefs.avatar = user.avatar;
  }
  if (user.introduction) {
    prefs.introduction = user.introduction;
  }

  if (Object.keys(prefs).length > 0) {
    data = await account.updatePrefs(prefs);
  }

  return {
    id: data.$id,
    avatar: data.prefs?.avatar || '',
    email: data.email,
    nickname: data.name,
    introduction: data.prefs?.intro || '',
  } as User;
};

const deleteUser: DeleteUserFn = async () => {
  throw new Error('Not implemented');
};

///////////////////////////////////////////////////////////////

const getProjects: GetProjectsFn = async ({}) => {
  const res = await databases.listDocuments(
    DATABASE_ID,
    PROJECTS_COLLECTION_ID,
  );

  const data = res.documents.map((doc) => ({
    id: doc.$id,
    teamId: doc.teamId,
    isDraft: doc.isDraft,
    isPublic: doc.isPublic,
    name: doc.name,
    description: doc.description,
    createdAt: doc.$createdAt,
    updatedAt: doc.$updatedAt,
    //
    data: doc.data,
  })) as Project[];

  return {
    data,
    total: res.total,
  };
};

const getProject: GetProjectFn = async ({ id }) => {
  const data = await databases.getDocument(
    DATABASE_ID,
    PROJECTS_COLLECTION_ID,
    id,
  );

  return {
    id: data.$id,
    teamId: data.teamId,
    isDraft: data.isDraft,
    isPublic: data.isPublic,
    name: data.name,
    description: data.description,
    createdAt: data.$createdAt,
    updatedAt: data.$updatedAt,
    //
    data: data.data,
  } as Project;
};

const createProject: CreateProjectFn = async ({ project }) => {
  const data = await databases.createDocument(
    DATABASE_ID,
    PROJECTS_COLLECTION_ID,
    ID.unique(),
    {
      teamId: project.teamId,
      isDraft: project.isDraft,
      isPublic: project.isPublic,
      name: project.name,
      description: project.description,
      data: project.data,
    },
    [
      Permission.read(Role.team(project.teamId)),
      Permission.update(Role.team(project.teamId)),
      Permission.delete(Role.team(project.teamId, 'owner')),
    ],
  );

  return {
    id: data.$id,
    teamId: data.teamId,
    isDraft: data.isDraft,
    isPublic: data.isPublic,
    name: data.name,
    description: data.description,
    createdAt: data.$createdAt,
    updatedAt: data.$updatedAt,
    //
    data: data.data,
  } as Project;
};

const updateProject: UpdateProjectFn = async ({ project }) => {
  const data = await databases.updateDocument(
    DATABASE_ID,
    PROJECTS_COLLECTION_ID,
    project.id,
    {
      teamId: project.teamId,
      isDraft: project.isDraft,
      isPublic: project.isPublic,
      name: project.name,
      description: project.description,
      data: project.data,
    },
  );

  return {
    id: data.$id,
    teamId: data.teamId,
    isDraft: data.isDraft,
    isPublic: data.isPublic,
    name: data.name,
    description: data.description,
    createdAt: data.$createdAt,
    updatedAt: data.$updatedAt,
    //
    data: data.data,
  } as Project;
};

const deleteProject: DeleteProjectFn = async ({ id }) => {
  await databases.deleteDocument(DATABASE_ID, PROJECTS_COLLECTION_ID, id);
};

///////////////////////////////////////////////////////////////

export {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  //
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
};
