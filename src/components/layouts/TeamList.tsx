import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { NavLink, ActionIcon, Group, Stack, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

import { IconPlus } from '@tabler/icons-react';

import { CreateTeam } from '@/components';

import { useGetTeamsQuery, useCreateTeamMutation } from '@/app-redux';

export interface TeamListProps {
  onNavigate: (path: string) => void;
}

export const TeamList: FC<TeamListProps> = ({ onNavigate }) => {
  const { t: tr } = useTranslation();

  const { data: teams } = useGetTeamsQuery();

  const [createTeam] = useCreateTeamMutation();

  const onCreateTeam = (name: string, description?: string) => {
    createTeam({
      id: crypto.randomUUID(),
      name: name,
      description: description || '',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
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

      <Stack>
        {teams?.map((team) => {
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
