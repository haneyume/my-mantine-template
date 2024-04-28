import { FC } from 'react';

import { Stack } from '@mantine/core';

import { EditProfile } from '@/components';

export const HomeProfilePage: FC = () => {
  return (
    <Stack>
      <EditProfile
        defaultData={{ email: '', nickname: '', introduction: '' }}
        onSubmitForm={(data) => {
          console.log(data);
        }}
      />
    </Stack>
  );
};
