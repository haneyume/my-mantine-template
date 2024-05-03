import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  Stack,
  Title,
  SimpleGrid,
  Group,
  TextInput,
  ActionIcon,
} from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';

import { IconPlus, IconSearch } from '@tabler/icons-react';

import { CreateProject } from '@/components';
import { ProjectCard } from '@/components';

import {
  useGetTeamsQuery,
  useGetProjectsQuery,
  useCreateProjectMutation,
} from '@/app-redux';

export const HomePage: FC<{}> = () => {
  const { data: teams } = useGetTeamsQuery();

  if (!teams) {
    return <div>Loading...</div>;
  }

  return (
    <Stack p="md">
      {teams.map((team) => {
        return (
          <TeamSection key={team.id} teamId={team.id} teamName={team.name} />
        );
      })}
    </Stack>
  );
};

const TeamSection = ({
  teamId,
  teamName,
}: {
  teamId: string;
  teamName: string;
}) => {
  const { t: tr } = useTranslation();

  const navigate = useNavigate();

  const [search, setSearch] = useState<string>('');

  const { data: projects } = useGetProjectsQuery();

  const [createProject] = useCreateProjectMutation();

  const onCreateProject = (name: string, description?: string) => {
    createProject({
      id: crypto.randomUUID(),
      team_id: teamId,
      is_draft: true,
      is_public: false,
      name: name,
      description: description || '',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),

      data: '',
    })
      .unwrap()
      .then(() => {
        notifications.show({
          title: tr('Success'),
          message: tr('Project created successfully'),
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

  if (!projects) {
    return <div>Loading...</div>;
  }

  return (
    <Stack>
      <Group justify="space-between">
        <Title order={3}>{teamName}</Title>

        <ActionIcon
          onClick={() => {
            modals.open({
              title: 'Create Project',
              children: (
                <CreateProject
                  onSubmitForm={(values) => {
                    onCreateProject(values.name, values.description);

                    modals.closeAll();
                  }}
                />
              ),
            });
          }}
        >
          <IconPlus size={18} />
        </ActionIcon>

        <div className="flex-1" />

        <TextInput
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          leftSection={<IconSearch size={18} />}
        />
      </Group>

      <SimpleGrid cols={3}>
        {projects
          ?.filter((project) => {
            return project.team_id === teamId;
          })
          .filter((project) => {
            return project.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((project) => {
            return (
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                thumbnail="/img/project-bg.jpg"
                created_at={project.created_at}
                onClick={() => navigate(`/project/${project.id}`)}
              />
            );
          })}
      </SimpleGrid>
    </Stack>
  );
};
