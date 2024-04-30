import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';

import { Stack } from '@mantine/core';
import { notifications } from '@mantine/notifications';

import { EditProject, ProjectDangerZoneSection } from '@/components';

import {
  useGetProjectByIdQuery,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} from '@/app-redux';

export const ProjectSettingsPage: FC = () => {
  const { t: tr } = useTranslation();

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
          })
            .unwrap()
            .then(() => {
              notifications.show({
                title: tr('Success'),
                message: tr('Project updated successfully'),
              });
            })
            .catch((error) => {
              notifications.show({
                title: tr('Error'),
                message: error.message,
                color: 'red',
              });
            });
        }}
      />

      <ProjectDangerZoneSection
        projectId={projectId}
        onSubmitForm={({ projectId }) => {
          deleteProject({ id: projectId })
            .unwrap()
            .then(() => {
              notifications.show({
                title: tr('Success'),
                message: tr('Project deleted successfully'),
              });
            })
            .catch((error) => {
              notifications.show({
                title: tr('Error'),
                message: error.message,
                color: 'red',
              });
            });

          navigate('/');
        }}
      />
    </Stack>
  );
};
