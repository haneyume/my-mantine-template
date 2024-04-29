import { FC } from 'react';

import { Stack } from '@mantine/core';

import { EditSettings, KeySettingSection, SignOutSection } from '@/components';

export const HomeSettingsPage: FC = () => {
  return (
    <Stack className="w-1/2">
      <EditSettings />

      <KeySettingSection />

      <SignOutSection onSignOut={() => {}} />
    </Stack>
  );
};
