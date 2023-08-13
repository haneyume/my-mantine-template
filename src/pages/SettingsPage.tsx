import { useTranslation } from 'react-i18next';

import {
  Stack,
  Card,
  Title,
  Select,
  useMantineColorScheme,
} from '@mantine/core';

import { languages } from '../app-i18n/i18n';

export const SettingsPage = () => {
  const { t, i18n } = useTranslation();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Stack p="md">
      <Card className="overflow-visible" withBorder>
        <Stack>
          <Title order={3}>{t('Settings')}</Title>

          <Select
            variant="filled"
            label={t('Language')}
            data={languages}
            value={i18n.language}
            onChange={(value) => i18n.changeLanguage(value!)}
          />

          <Select
            variant="filled"
            label={t('Color Scheme')}
            data={[
              { label: t('light'), value: 'light' },
              { label: t('dark'), value: 'dark' },
            ]}
            value={colorScheme}
            onChange={(value) => toggleColorScheme(value as 'light' | 'dark')}
          />
        </Stack>
      </Card>
    </Stack>
  );
};
