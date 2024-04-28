import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Stack, Card, Button, Title, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

export interface TeamDangerZoneProps {
  teamId: string;
  onSubmitForm: (data: { teamId: string }) => void;
}

export const TeamDangerZoneSection: FC<TeamDangerZoneProps> = ({
  teamId,
  onSubmitForm,
}) => {
  const { t: tr } = useTranslation();

  const openModal = () => {
    modals.openConfirmModal({
      title: tr('Please confirm your action'),
      children: (
        <Text size="sm">
          {tr(
            'Are you sure you want to delete this team? This action is irreversible and will delete all the data associated with this team.',
          )}
        </Text>
      ),
      labels: { confirm: tr('Confirm'), cancel: tr('Cancel') },
      confirmProps: { color: 'red' },
      onCancel: () => {},
      onConfirm: () => {
        onSubmitForm({ teamId });
      },
    });
  };

  return (
    <Card withBorder>
      <Stack>
        <Title order={3}>{tr('Danger Zone')}</Title>

        <Button fullWidth color="red" onClick={openModal}>
          {tr('Delete team')}
        </Button>
      </Stack>
    </Card>
  );
};
