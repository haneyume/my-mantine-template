import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Stack } from '@mantine/core';
import { notifications } from '@mantine/notifications';

import { EditProfile } from '@/components';

import {
  useAppSelector,
  selectCurrentUserId,
  //
  useGetUserByIdQuery,
  useUpdateUserMutation,
} from '@/app-redux';

export const HomeProfilePage: FC = () => {
  const { t: tr } = useTranslation();

  const currentUserId = useAppSelector(selectCurrentUserId);

  const { data: user } = useGetUserByIdQuery({ id: currentUserId || '' });

  const [updateUser] = useUpdateUserMutation();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Stack className="w-1/2">
      <EditProfile
        defaultData={{
          email: user.email,
          nickname: user.nickname,
          introduction: user.introduction,
        }}
        onSubmitForm={({ email, nickname, introduction }) => {
          updateUser({
            ...user,
            email,
            nickname,
            introduction,
          })
            .unwrap()
            .then(() => {
              notifications.show({
                title: tr('Success'),
                message: tr('Profile updated successfully'),
              });
            })
            .catch((error) => {
              notifications.show({
                title: tr('Error'),
                message: error.message,
                color: 'red',
              });
            });
        }}
      />
    </Stack>
  );
};
