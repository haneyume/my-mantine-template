import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { NavLink, ActionIcon, Group, Stack, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';

import { IconPlus } from '@tabler/icons-react';

import { CreateTeam } from '@/components';

import { useGetTeamsQuery, useCreateTeamMutation } from '@/app-redux';

export interface TeamListProps {
  onNavigate: (path: string) => void;
}

export const TeamList: FC<TeamListProps> = ({ onNavigate }) => {
  const { t: tr } = useTranslation();

  const { data: teams } = useGetTeamsQuery({});

  const [createTeam] = useCreateTeamMutation();

  const onCreateTeam = (name: string, description?: string) => {
    createTeam({
      team: {
        id: crypto.randomUUID(),
        name: name,
        description: description || '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    })
      .unwrap()
      .then(() => {
        notifications.show({
          title: tr('Success'),
          message: tr('Team created successfully'),
        });
      })
      .catch((error) => {
        notifications.show({
          title: tr('Error'),
          message: error.message,
          color: 'red',
        });
      });
  };

  return (
    <Stack>
      <Group justify="space-between">
        <Text>{tr('Teams')}</Text>

        <ActionIcon>
          <IconPlus
            size={18}
            onClick={() => {
              modals.open({
                title: 'Create Team',
                children: (
                  <CreateTeam
                    onSubmitForm={(values) => {
                      onCreateTeam(values.name, values.description);

                      modals.closeAll();
                    }}
                  />
                ),
              });
            }}
          />
        </ActionIcon>
      </Group>

      <Stack gap={0}>
        {teams?.data?.map((team) => {
          return (
            <NavLink
              className="rounded-lg"
              key={team.id}
              label={team.name}
              onClick={() => onNavigate(`/team/${team.id}`)}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};
