import { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Stack } from '@mantine/core';

import { EditTeam, TeamDangerZoneSection } from '@/components';

import {
  useGetTeamByIdQuery,
  useUpdateTeamMutation,
  useDeleteTeamMutation,
} from '@/app-redux';

export const TeamSettingsPage: FC = () => {
  const navigate = useNavigate();
  const { teamId = '' } = useParams();

  const { data: team } = useGetTeamByIdQuery({ id: teamId });

  const [updateTeam] = useUpdateTeamMutation();
  const [deleteTeam] = useDeleteTeamMutation();

  if (!team) {
    return <div>Loading...</div>;
  }

  return (
    <Stack className="w-1/2" p="md">
      <EditTeam
        defaultData={team}
        onSubmitForm={({ id, name, description }) => {
          updateTeam({
            ...team,
            id,
            name,
            description,
          });
        }}
      />

      <TeamDangerZoneSection
        teamId={teamId}
        onSubmitForm={({ teamId }) => {
          deleteTeam({ id: teamId });

          navigate('/');
        }}
      />
    </Stack>
  );
};
