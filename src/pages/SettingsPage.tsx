import { Stack } from '@mantine/core';

import { SettingsSection } from '../sections/Settings/SettingsSection';
import { KeySettingSection } from '../sections/Settings/KeySettingSection';

export const SettingsPage = () => {
  return (
    <Stack p="md">
      <SettingsSection />

      <KeySettingSection />
    </Stack>
  );
};
