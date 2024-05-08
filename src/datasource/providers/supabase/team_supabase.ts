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

///////////////////////////////////////////////////////////////

const getTeams: GetTeamsFn = async ({}) => {
  return { data: [], total: 0 };
};

const getTeam: GetTeamFn = async ({ id }) => {
  console.log(id);

  return undefined;
};

const createTeam: CreateTeamFn = async ({ team }) => {
  return team;
};

const updateTeam: UpdateTeamFn = async ({ team }) => {
  return team;
};

const deleteTeam: DeleteTeamFn = async ({ id }) => {
  console.log(id);
};

///////////////////////////////////////////////////////////////

const getTeamMembers: GetTeamMembersFn = async ({ teamId }) => {
  console.log(teamId);

  return { data: [], total: 0 };
};

const getTeamMember: GetTeamMemberFn = async ({ teamId, id }) => {
  console.log(teamId, id);

  return undefined;
};

const createTeamMember: CreateTeamMemberFn = async ({ teamMember }) => {
  return teamMember;
};

const updateTeamMember: UpdateTeamMemberFn = async ({ teamMember }) => {
  return teamMember;
};

const deleteTeamMember: DeleteTeamMemberFn = async ({ teamId, id }) => {
  console.log(teamId, id);
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
