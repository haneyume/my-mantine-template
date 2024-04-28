import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Stack, Card, Button, Title, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

export interface LeaveTeamSectionProps {
  teamId: string;
  onSubmitForm: (data: { teamId: string }) => void;
}

export const LeaveTeamSection: FC<LeaveTeamSectionProps> = ({
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
            'Are you sure you want to leave this team? This action is irreversible and you will not be able to access team data after leaving.',
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
        <Title order={3}>{tr('Leave this Team')}</Title>

        <Button fullWidth color="yellow" onClick={openModal}>
          {tr('Leave team')}
        </Button>
      </Stack>
    </Card>
  );
};
