import { FC } from 'react';

import { Stack } from '@mantine/core';

import { EditSettings, KeySettingSection, SignOutSection } from '@/components';

export const HomeSettingsPage: FC = () => {
  return (
    <Stack>
      <EditSettings />

      <KeySettingSection />

      <SignOutSection onSignOut={() => {}} />
    </Stack>
  );
};
