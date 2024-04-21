import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Stack, Title, SimpleGrid } from '@mantine/core';

import { ProjectCard } from '@/components';

export const HomePage: FC<{}> = () => {
  const navigate = useNavigate();

  const [projects, _setProjects] = useState<string[]>([
    'Project1',
    'Project2',
    'Project3',
    'Project4',
  ]);

  return (
    <Stack p="md">
      <Title order={3}>Projects</Title>

      <SimpleGrid cols={3}>
        {projects?.map((project, index) => (
          <ProjectCard
            key={index}
            name={project}
            description=""
            thumbnail="/img/project-bg.jpg"
            created_at={new Date().toISOString()}
            onClick={() => navigate(`/project/${project}`)}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
};
