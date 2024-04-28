import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Stack, Title, Text, Card } from '@mantine/core';

import { useGetProjectByIdQuery } from '@/app-redux';

export const ProjectOverviewPage: FC<{}> = () => {
  const { projectId = '' } = useParams();

  const { data: project } = useGetProjectByIdQuery({ id: projectId });

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <Stack p="md">
      <Title order={3}>Project</Title>

      <Card>
        <Text>{JSON.stringify(project.data)}</Text>
      </Card>
    </Stack>
  );
};
