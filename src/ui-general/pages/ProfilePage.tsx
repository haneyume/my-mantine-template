import { Stack } from '@mantine/core';

import { EditProfileSection } from '../sections/Profile/EditProfileSection';
import { SignOutSection } from '../sections/Profile/SignOutSection';

export const ProfilePage = () => {
  return (
    <Stack>
      <EditProfileSection />
      <SignOutSection />
    </Stack>
  );
};
