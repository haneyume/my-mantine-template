import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Stack, Text, Button, Card } from '@mantine/core';

export const FullFeatureButton: FC<{}> = ({}) => {
  const { t: tr } = useTranslation();

  return (
    <Card p="xs">
      <Stack>
        <Text>Get full features</Text>
        <Button>{tr('See plans')}</Button>
      </Stack>
    </Card>
  );
};
