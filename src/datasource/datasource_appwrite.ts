import type { User, Team, TeamMember, Project } from '@/types';
import type {
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
} from './function_types';

import {
  account,
  teams,
  databases,
  ID,
  Role,
  Permission,
  DATABASE_ID,
  PROJECTS_COLLECTION_ID,
} from './providers/appwrite_';

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

const getTeams: GetTeamsFn = async ({}) => {
  const res = await teams.list();

  const data = res.teams.map((team) => ({
    id: team.$id,
    name: team.name,
    description: team.prefs.description || '',
    createdAt: team.$createdAt,
    updatedAt: team.$updatedAt,
  })) as Team[];

  return {
    data,
    total: res.total,
  };
};

const getTeam: GetTeamFn = async ({ id }) => {
  const data = await teams.get(id);

  return {
    id: data.$id,
    name: data.name,
    description: data.prefs.description || '',
    createdAt: data.$createdAt,
    updatedAt: data.$updatedAt,
  } as Team;
};

const createTeam: CreateTeamFn = async ({ team }) => {
  let data = await teams.create(ID.unique(), team.name, ['owner']);

  let prefs: Record<string, any> = {};
  if (team.description !== '') {
    prefs.description = team.description;
  }

  if (Object.keys(prefs).length > 0) {
    data = await teams.updatePrefs(data.$id, prefs);
  }

  return {
    id: data.$id,
    name: data.name,
    description: data.prefs?.description || '',
    createdAt: data.$createdAt,
    updatedAt: data.$updatedAt,
  } as Team;
};

const updateTeam: UpdateTeamFn = async ({ team }) => {
  let data = await teams.updateName(team.id, team.name);

  let prefs: Record<string, any> = {};
  if (team.description !== '') {
    prefs.description = team.description;
  }

  if (Object.keys(prefs).length > 0) {
    data = await teams.updatePrefs(data.$id, prefs);
  }

  return {
    id: data.$id,
    name: data.name,
    description: data.prefs?.description || '',
    createdAt: data.$createdAt,
    updatedAt: data.$updatedAt,
  } as Team;
};

const deleteTeam: DeleteTeamFn = async ({ id }) => {
  await teams.delete(id);
};

///////////////////////////////////////////////////////////////

const getTeamMembers: GetTeamMembersFn = async ({ teamId }) => {
  const res = await teams.listMemberships(teamId);

  const data = res.memberships.map((membership) => ({
    id: membership.$id,
    teamId: membership.teamId,
    userId: membership.userId,
    role: membership.roles[0],
    createdAt: membership.$createdAt,
    updatedAt: membership.$updatedAt,
    //
    user: {
      id: membership.userId,
      avatar: '',
      email: membership.userEmail,
      nickname: membership.userName,
      introduction: '',
    },
  })) as TeamMember[];

  return {
    data,
    total: res.total,
  };
};

const getTeamMember: GetTeamMemberFn = async ({ teamId, id }) => {
  const data = await teams.getMembership(teamId, id);

  return {
    id: data.$id,
    teamId: data.teamId,
    userId: data.userId,
    role: data.roles[0],
    createdAt: data.$createdAt,
    updatedAt: data.$updatedAt,
    //
    user: {
      id: data.userId,
      avatar: '',
      email: data.userEmail,
      nickname: data.userName,
      introduction: '',
    },
  } as TeamMember;
};

const createTeamMember: CreateTeamMemberFn = async ({ teamMember }) => {
  let data = await teams.createMembership(
    teamMember.teamId,
    [teamMember.role],
    undefined,
    teamMember.userId,
  );

  return {
    id: data.$id,
    teamId: data.teamId,
    userId: data.userId,
    role: data.roles[0],
    createdAt: data.$createdAt,
    updatedAt: data.$updatedAt,
    //
    user: {
      id: data.userId,
      avatar: '',
      email: data.userEmail,
      nickname: data.userName,
      introduction: '',
    },
  } as TeamMember;
};

const updateTeamMember: UpdateTeamMemberFn = async ({ teamMember }) => {
  let data = await teams.updateMembership(teamMember.teamId, teamMember.id, [
    teamMember.role,
  ]);

  return {
    id: data.$id,
    teamId: data.teamId,
    userId: data.userId,
    role: data.roles[0],
    createdAt: data.$createdAt,
    updatedAt: data.$updatedAt,
    //
    user: {
      id: data.userId,
      avatar: '',
      email: data.userEmail,
      nickname: data.userName,
      introduction: '',
    },
  } as TeamMember;
};

const deleteTeamMember: DeleteTeamMemberFn = async ({ teamId, id }) => {
  await teams.deleteMembership(teamId, id);
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
