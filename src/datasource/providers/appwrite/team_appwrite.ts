import type { Team, TeamMember } from '../../basic_types';
import type {
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
  InviteMemberFn,
} from '../../function_types';

import { teams, ID } from './_appwrite';

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

const inviteMember: InviteMemberFn = async ({ teamId, email, role }) => {
  await teams.createMembership(teamId, [role], email);
};

///////////////////////////////////////////////////////////////

export {
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
  inviteMember,
};
