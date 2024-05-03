import { FC } from 'react';

import { Stack } from '@mantine/core';

import { EditSettings, KeySettingSection, SignOutSection } from '@/components';

import { useAppDispatch, setCurrentUserId } from '@/app-redux';

import { logout } from '@/datasource';

export const HomeSettingsPage: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Stack className="w-1/2" p="md">
      <EditSettings />

      <KeySettingSection />

      <SignOutSection
        onSignOut={() => {
          logout().then(() => {
            dispatch(setCurrentUserId(undefined));
          });
        }}
      />
    </Stack>
  );
};
