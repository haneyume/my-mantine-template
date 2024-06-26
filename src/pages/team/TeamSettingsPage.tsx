import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';

import { Stack } from '@mantine/core';
import { notifications } from '@mantine/notifications';

import { EditTeam, TeamDangerZoneSection } from '@/components';

import {
  useGetTeamByIdQuery,
  useUpdateTeamMutation,
  useDeleteTeamMutation,
} from '@/app-redux';

export const TeamSettingsPage: FC = () => {
  const { t: tr } = useTranslation();

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
            team: {
              ...team,
              id,
              name,
              description,
            },
          })
            .unwrap()
            .then(() => {
              notifications.show({
                title: tr('Success'),
                message: tr('Team updated successfully'),
              });
            })
            .catch((error) => {
              notifications.show({
                title: tr('Error'),
                message: error.message,
                color: 'red',
              });
            });
        }}
      />

      <TeamDangerZoneSection
        teamId={teamId}
        onSubmitForm={({ teamId }) => {
          deleteTeam({ id: teamId })
            .unwrap()
            .then(() => {
              notifications.show({
                title: tr('Success'),
                message: tr('Team deleted successfully'),
              });
            })
            .catch((error) => {
              notifications.show({
                title: tr('Error'),
                message: error.message,
                color: 'red',
              });
            });

          navigate('/');
        }}
      />
    </Stack>
  );
};
