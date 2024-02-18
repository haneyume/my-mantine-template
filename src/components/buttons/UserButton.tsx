import { FC } from 'react';

import { UnstyledButton, Group, Avatar, Text } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';

export interface UserButtonProps {
  name?: string;
  email?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const UserButton: FC<UserButtonProps> = ({
  name = 'test-user',
  email = 'test@test.com',
  icon,
  onClick,
}) => {
  if (!name || name.length === 0) {
    name = 'test-user';
  }

  return (
    <UnstyledButton onClick={onClick}>
      <Group>
        <Avatar color="yellow" radius="xl">
          {name.charAt(0)}
        </Avatar>

        <div className="flex-1">
          <Text size="sm">{name}</Text>

          <Text color="dimmed" size="xs">
            {email}
          </Text>
        </div>

        {icon || <IconChevronRight size={14} stroke={1.5} />}
      </Group>
    </UnstyledButton>
  );
};
