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

  data = await account.updatePrefs({
    avatar: user.avatar,
    intro: user.introduction,
  });

  return {
    id: data.$id,
    avatar: data.prefs.avatar || '',
    email: data.email,
    nickname: data.name,
    introduction: data.prefs.intro || '',
  } as User;
};

const deleteUser: DeleteUserFn = async () => {
  throw new Error('Not implemented');
};

///////////////////////////////////////////////////////////////

const getTeams: GetTeamsFn = async ({}) => {
  const data = await teams.list();

  return data.teams.map((team) => ({
    id: team.$id,
    name: team.name,
    description: team.prefs.description || '',
    created_at: team.$createdAt,
    updated_at: team.$updatedAt,
  })) as Team[];
};

const getTeam: GetTeamFn = async ({ id }) => {
  const data = await teams.get(id);

  return {
    id: data.$id,
    name: data.name,
    description: data.prefs.description || '',
    created_at: data.$createdAt,
    updated_at: data.$updatedAt,
  } as Team;
};

const createTeam: CreateTeamFn = async ({ team }) => {
  let data = await teams.create(ID.unique(), team.name);

  data = await teams.updatePrefs(data.$id, {
    description: team.description,
  });

  return {
    id: data.$id,
    name: data.name,
    description: data.prefs.description || '',
    created_at: data.$createdAt,
    updated_at: data.$updatedAt,
  } as Team;
};

const updateTeam: UpdateTeamFn = async ({ team }) => {
  let data = await teams.updateName(team.id, team.name);

  data = await teams.updatePrefs(data.$id, {
    description: team.description,
  });

  return {
    id: data.$id,
    name: data.name,
    description: data.prefs.description || '',
    created_at: data.$createdAt,
    updated_at: data.$updatedAt,
  } as Team;
};

const deleteTeam: DeleteTeamFn = async ({ id }) => {
  await teams.delete(id);
};

///////////////////////////////////////////////////////////////

const getTeamMembers: GetTeamMembersFn = async ({ teamId }) => {
  const data = await teams.listMemberships(teamId);

  return data.memberships.map((membership) => ({
    id: membership.$id,
    team_id: membership.teamId,
    user_id: membership.userId,
    role: membership.roles[0],
    created_at: membership.$createdAt,
    updated_at: membership.$updatedAt,
    //
    user: {
      id: membership.userId,
      avatar: '',
      email: membership.userEmail,
      nickname: membership.userName,
      introduction: '',
    },
  })) as TeamMember[];
};

const getTeamMember: GetTeamMemberFn = async ({ teamId, id }) => {
  const data = await teams.getMembership(teamId, id);

  return {
    id: data.$id,
    team_id: data.teamId,
    user_id: data.userId,
    role: data.roles[0],
    created_at: data.$createdAt,
    updated_at: data.$updatedAt,
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
    teamMember.team_id,
    [teamMember.role],
    undefined,
    teamMember.user_id,
  );

  return {
    id: data.$id,
    team_id: data.teamId,
    user_id: data.userId,
    role: data.roles[0],
    created_at: data.$createdAt,
    updated_at: data.$updatedAt,
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
  let data = await teams.updateMembership(teamMember.team_id, teamMember.id, [
    teamMember.role,
  ]);

  return {
    id: data.$id,
    team_id: data.teamId,
    user_id: data.userId,
    role: data.roles[0],
    created_at: data.$createdAt,
    updated_at: data.$updatedAt,
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
  const data = await databases.listDocuments(
    DATABASE_ID,
    PROJECTS_COLLECTION_ID,
  );

  return data.documents.map((doc) => ({
    id: doc.$id,
    team_id: doc.teamId,
    is_draft: doc.isDraft,
    is_public: doc.isPublic,
    name: doc.name,
    description: doc.description,
    created_at: doc.$createdAt,
    updated_at: doc.$updatedAt,
    //
    data: doc.data,
  })) as Project[];
};

const getProject: GetProjectFn = async ({ id }) => {
  const data = await databases.getDocument(
    DATABASE_ID,
    PROJECTS_COLLECTION_ID,
    id,
  );

  return {
    id: data.$id,
    team_id: data.teamId,
    is_draft: data.isDraft,
    is_public: data.isPublic,
    name: data.name,
    description: data.description,
    created_at: data.$createdAt,
    updated_at: data.$updatedAt,
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
      teamId: project.team_id,
      isDraft: project.is_draft,
      isPublic: project.is_public,
      name: project.name,
      description: project.description,
      data: project.data,
    },
  );

  return {
    id: data.$id,
    team_id: data.teamId,
    is_draft: data.isDraft,
    is_public: data.isPublic,
    name: data.name,
    description: data.description,
    created_at: data.$createdAt,
    updated_at: data.$updatedAt,
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
      teamId: project.team_id,
      isDraft: project.is_draft,
      isPublic: project.is_public,
      name: project.name,
      description: project.description,
      data: project.data,
    },
  );

  return {
    id: data.$id,
    team_id: data.teamId,
    is_draft: data.isDraft,
    is_public: data.isPublic,
    name: data.name,
    description: data.description,
    created_at: data.$createdAt,
    updated_at: data.$updatedAt,
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
