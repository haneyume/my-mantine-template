import { useParams, useNavigate } from 'react-router-dom';

import { Stack, Card, Button, Title, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';

import { useDeleteProjectMutation } from '@/app-redux';

export const DangerZoneSection = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const [deleteProject] = useDeleteProjectMutation();

  const openModal = () => {
    modals.openConfirmModal({
      title: 'Please confirm your action',
      children: (
        <Text size="sm">
          Are you sure you want to delete this project? This action is
          irreversible and will delete all the data associated with this
          project.
        </Text>
      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      confirmProps: { color: 'red' },
      onCancel: () => {},
      onConfirm: () => {
        deleteProject(projectId!);
        navigate('/');

        notifications.show({
          title: 'Success',
          message: 'Project deleted',
        });
      },
    });
  };

  return (
    <Card withBorder>
      <Stack>
        <Title order={3}>Danger Zone</Title>

        <Button
          className="w-full"
          variant="light"
          color="red"
          onClick={openModal}
        >
          Delete Project
        </Button>
      </Stack>
    </Card>
  );
};
