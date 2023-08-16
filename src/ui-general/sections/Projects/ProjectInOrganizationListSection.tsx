import { useNavigate } from 'react-router-dom';

import { Grid } from '@mantine/core';

import { ProjectCard } from './ProjectCard';

import { useGetProjectsQuery } from '@/app-redux';

export const ProjectInOrganizationListSection = ({
  organizationId,
}: {
  organizationId: string;
}) => {
  const navigate = useNavigate();

  const { data } = useGetProjectsQuery({ organizationId });

  return (
    <Grid>
      {data?.map((project, index) => {
        return (
          <Grid.Col key={index} span={3}>
            <ProjectCard
              projectId={project.id}
              type={'Prod'}
              name={project.name}
              description={project.description}
              thumbnail="/img/react-logo.png"
              onClick={() => navigate(`/project/${project.id}/overview`)}
            />
          </Grid.Col>
        );
      })}
    </Grid>
  );
};
