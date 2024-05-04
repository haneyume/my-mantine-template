import { FC } from 'react';

import { Stack } from '@mantine/core';

import { EditSettings, KeySettingSection, SignOutSection } from '@/components';

import { auth_logout } from '@/datasource';

export const HomeSettingsPage: FC = () => {
  return (
    <Stack className="w-1/2" p="md">
      <EditSettings />

      <KeySettingSection />

      <SignOutSection onSignOut={() => auth_logout({})} />
    </Stack>
  );
};
