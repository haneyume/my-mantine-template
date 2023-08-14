import { Stack } from '@mantine/core';

import { EditSettingsSection } from '../sections/Settings/EditSettingsSection';
import { KeySettingSection } from '../sections/Settings/KeySettingSection';

export const SettingsPage = () => {
  return (
    <Stack p="md">
      <EditSettingsSection />
      <KeySettingSection />
    </Stack>
  );
};
