import { useParams, useNavigate } from 'react-router-dom';

import { Stack, Card, Button, Title, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';

import { useDeleteOrganizationMutation } from '@/app-redux';

export const DangerZoneSection = () => {
  const { organizationId } = useParams();
  const navigate = useNavigate();

  const [deleteOrganization] = useDeleteOrganizationMutation();

  const openModal = () => {
    modals.openConfirmModal({
      title: 'Please confirm your action',
      children: (
        <Text size="sm">
          Are you sure you want to delete this organization? This action is
          irreversible and will delete all the data associated with this
          organization.
        </Text>
      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      confirmProps: { color: 'red' },
      onCancel: () => {},
      onConfirm: () => {
        deleteOrganization(organizationId!);
        navigate('/');

        notifications.show({
          title: 'Success',
          message: 'Organization deleted',
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
          Delete organization
        </Button>
      </Stack>
    </Card>
  );
};
