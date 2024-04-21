import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Stack, Title, Text, Card } from '@mantine/core';

export const ProjectOverviewPage: FC<{}> = () => {
  const { projectId = '' } = useParams();

  const [projectData, setProjectData] = useState<
    | {
        data: string;
      }
    | undefined
  >(undefined);

  useEffect(() => {
    setProjectData({
      data: `This is ${projectId}`,
    });
  }, []);

  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <Stack p="md">
      <Title order={3}>Project</Title>

      <Card>
        <Text>{projectData.data}</Text>
      </Card>
    </Stack>
  );
};
