import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Stack, Card, Title } from '@mantine/core';

import { ColorSchemeSelect } from '../selects/ColorSchemeSelect';
import { LanguageSelect } from '../selects/LanguageSelect';

export const EditSettings: FC = () => {
  const { t: tr } = useTranslation();

  return (
    <Card withBorder className="overflow-visible">
      <Stack>
        <Title order={3}>{tr('Settings')}</Title>

        <LanguageSelect />

        <ColorSchemeSelect />
      </Stack>
    </Card>
  );
};
