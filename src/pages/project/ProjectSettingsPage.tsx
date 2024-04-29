import { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Stack } from '@mantine/core';

import { EditProject, ProjectDangerZoneSection } from '@/components';

import {
  useGetProjectByIdQuery,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} from '@/app-redux';

export const ProjectSettingsPage: FC = () => {
  const navigate = useNavigate();
  const { projectId = '' } = useParams();

  const { data: project } = useGetProjectByIdQuery({ id: projectId });

  const [updateProject] = useUpdateProjectMutation();
  const [deleteProject] = useDeleteProjectMutation();

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <Stack className="w-1/2" p="md">
      <EditProject
        defaultData={project}
        onSubmitForm={({ id, name, description }) => {
          updateProject({
            ...project,
            id,
            name,
            description,
          });
        }}
      />

      <ProjectDangerZoneSection
        projectId={projectId}
        onSubmitForm={({ projectId }) => {
          deleteProject({ id: projectId });

          navigate('/');
        }}
      />
    </Stack>
  );
};
