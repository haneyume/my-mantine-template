import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Stack, Title, Card, Textarea } from '@mantine/core';

import { useGetProjectByIdQuery, useUpdateProjectMutation } from '@/app-redux';

export const ProjectOverviewPage: FC<{}> = () => {
  const { projectId = '' } = useParams();

  const { data: project } = useGetProjectByIdQuery({ id: projectId });

  const [updateProject] = useUpdateProjectMutation();

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <Stack p="md">
      <Title order={3}>Project</Title>

      <Card>
        <Textarea
          label="Data"
          placeholder="Please input data"
          value={project.data}
          onChange={(e) => {
            updateProject({
              ...project,
              data: e.currentTarget.value,
            });
          }}
        />
      </Card>
    </Stack>
  );
};
