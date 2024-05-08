import type {} from '../../basic_types';
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

import { getDB } from './_idb';

///////////////////////////////////////////////////////////////

const getTeams: GetTeamsFn = async ({}) => {
  const db = await getDB();

  const data = await db.getAll('teams');

  return { data, total: data.length };
};

const getTeam: GetTeamFn = async ({ id }) => {
  const db = await getDB();

  return await db.get('teams', id);
};

const createTeam: CreateTeamFn = async ({ team }) => {
  const db = await getDB();

  await db.put('teams', team, team.id);

  return team;
};

const updateTeam: UpdateTeamFn = async ({ team }) => {
  const db = await getDB();

  await db.put('teams', team, team.id);

  return team;
};

const deleteTeam: DeleteTeamFn = async ({ id }) => {
  const db = await getDB();

  await db.delete('teams', id);
};

///////////////////////////////////////////////////////////////

const getTeamMembers: GetTeamMembersFn = async ({ teamId }) => {
  const db = await getDB();

  let data = await db.getAll('teamMembers');

  data = data.filter((teamMember) => teamMember.teamId === teamId);

  return { data, total: data.length };
};

const getTeamMember: GetTeamMemberFn = async ({ teamId, id }) => {
  const db = await getDB();

  return await db.get('teamMembers', `${teamId}-${id}`);
};

const createTeamMember: CreateTeamMemberFn = async ({ teamMember }) => {
  const db = await getDB();

  await db.put(
    'teamMembers',
    teamMember,
    `${teamMember.teamId}-${teamMember.id}`,
  );

  return teamMember;
};

const updateTeamMember: UpdateTeamMemberFn = async ({ teamMember }) => {
  const db = await getDB();

  await db.put(
    'teamMembers',
    teamMember,
    `${teamMember.teamId}-${teamMember.id}`,
  );

  return teamMember;
};

const deleteTeamMember: DeleteTeamMemberFn = async ({ teamId, id }) => {
  const db = await getDB();

  await db.delete('teamMembers', `${teamId}-${id}`);
};

///////////////////////////////////////////////////////////////

const inviteMember: InviteMemberFn = async ({}) => {
  throw new Error('Not implemented');
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
