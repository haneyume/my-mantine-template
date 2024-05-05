import { FC } from 'react';

import { UnstyledButton, Group, Avatar, Text } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';

import {
  useAppSelector,
  selectCurrentUserId,
  //
  useGetUserByIdQuery,
} from '@/app-redux';

export interface UserButtonProps {
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const UserButton: FC<UserButtonProps> = ({ icon, onClick }) => {
  const currentUserId = useAppSelector(selectCurrentUserId);

  const { data: user } = useGetUserByIdQuery({ id: currentUserId || '' });

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <UnstyledButton onClick={onClick}>
      <Group>
        {user.avatar !== '' ? (
          <Avatar radius="xl" bg="white" src={user.avatar} />
        ) : (
          <Avatar radius="xl" color="yellow">
            {user.nickname.charAt(0)}
          </Avatar>
        )}

        <div className="flex-1">
          <Text size="sm">{user.nickname}</Text>

          <Text c="dimmed" size="xs">
            {user.email}
          </Text>
        </div>

        {icon || <IconChevronRight size={14} stroke={1.5} />}
      </Group>
    </UnstyledButton>
  );
};
