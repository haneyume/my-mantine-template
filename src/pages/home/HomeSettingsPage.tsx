import { FC } from 'react';

import { Stack } from '@mantine/core';

import { EditSettings, KeySettingSection } from '@/components';

export const HomeSettingsPage: FC = () => {
  return (
    <Stack>
      <EditSettings />

      <KeySettingSection />
    </Stack>
  );
};
