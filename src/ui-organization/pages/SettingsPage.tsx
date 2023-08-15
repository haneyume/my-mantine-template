import { Stack } from '@mantine/core';

import { EditOrganizationSection, DangerZoneSection } from '../sections';

export const SettingsPage = () => {
  return (
    <Stack>
      <EditOrganizationSection />
      <DangerZoneSection />
    </Stack>
  );
};
