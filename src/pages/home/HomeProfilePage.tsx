import { FC } from 'react';

import { Stack } from '@mantine/core';

import { EditProfile } from '@/components';

export const HomeProfilePage: FC = () => {
  return (
    <Stack className="w-1/2">
      <EditProfile
        defaultData={{ email: '', nickname: '', introduction: '' }}
        onSubmitForm={(data) => {
          console.log(data);
        }}
      />
    </Stack>
  );
};
