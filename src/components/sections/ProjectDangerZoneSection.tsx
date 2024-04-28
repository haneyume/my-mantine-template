import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Stack, Card, Button, Title, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

export interface ProjectDangerZoneProps {
  projectId: string;
  onSubmitForm: (data: { projectId: string }) => void;
}

export const ProjectDangerZoneSection: FC<ProjectDangerZoneProps> = ({
  projectId,
  onSubmitForm,
}) => {
  const { t: tr } = useTranslation();

  const openModal = () => {
    modals.openConfirmModal({
      title: 'Please confirm your action',
      children: (
        <Text size="sm">
          {tr(
            'Are you sure you want to delete this project? This action is irreversible and will delete all the data associated with this project.',
          )}
        </Text>
      ),
      labels: { confirm: tr('Confirm'), cancel: tr('Cancel') },
      confirmProps: { color: 'red' },
      onCancel: () => {},
      onConfirm: () => {
        onSubmitForm({ projectId });
      },
    });
  };

  return (
    <Card withBorder>
      <Stack>
        <Title order={3}>{tr('Danger Zone')}</Title>

        <Button fullWidth color="red" onClick={openModal}>
          {tr('Delete project')}
        </Button>
      </Stack>
    </Card>
  );
};
