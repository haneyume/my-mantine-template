import { FC, useState } from 'react';
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

import { IconPlus, IconSearch } from '@tabler/icons-react';

import { CreateProject } from '@/components';
import { useGetProjectsQuery, useCreateProjectMutation } from '@/app-redux';

import { ProjectCard } from '@/components';

export const HomePage: FC<{}> = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState<string>('');

  const { data: projects } = useGetProjectsQuery();

  const [createProject] = useCreateProjectMutation();

  const onCreateProject = (name: string, description?: string) => {
    createProject({
      id: crypto.randomUUID(),
      team_id: crypto.randomUUID(),
      is_draft: true,
      is_public: false,
      name: name,
      description: description || '',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),

      data: {},
    });
  };

  return (
    <Stack>
      <Group justify="space-between">
        <Title order={3}>Projects</Title>

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
