import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Card, Stack, Button, Title } from '@mantine/core';

export interface SignOutSectionProps {
  onSignOut: () => void;
}

export const SignOutSection: FC<SignOutSectionProps> = ({ onSignOut }) => {
  const { t: tr } = useTranslation();

  return (
    <Card withBorder>
      <Stack>
        <Title order={3}>{tr('Sign Out')}</Title>

        <Button className="w-full" color="red" onClick={() => onSignOut()}>
          {tr('Sign Out')}
        </Button>
      </Stack>
    </Card>
  );
};
