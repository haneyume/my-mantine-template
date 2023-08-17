import { Stack } from '@mantine/core';

import { EditProjectSection, DangerZoneSection } from '../sections';

export const SettingsPage = () => {
  return (
    <Stack p="md">
      <EditProjectSection />
      <DangerZoneSection />
    </Stack>
  );
};
