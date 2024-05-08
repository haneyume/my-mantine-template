import type { InviteMemberFn } from '../../function_types';

import { teams } from './_appwrite';

const inviteMember: InviteMemberFn = async ({ teamId, email, role }) => {
  await teams.createMembership(teamId, [role], email);
};

export { inviteMember };
