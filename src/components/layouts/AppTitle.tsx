import { FC } from 'react';

import { AppShell, Burger, Title, UnstyledButton } from '@mantine/core';

import { IconBrandReact } from '@tabler/icons-react';

import { ThemeButton } from '../buttons/ThemeButton';
import { UserButton } from '../buttons/UserButton';

export interface AppTitleProps {
  isSidebarOpened: boolean;
  setIsSidebarOpened: (value: boolean) => void;
  userNickname: string;
  userEmail: string;
  onNavigate: (path: string) => void;
}

export const AppTitle: FC<AppTitleProps> = ({
  isSidebarOpened,
  setIsSidebarOpened,
  userNickname,
  userEmail,
  onNavigate,
}) => {
  return (
    <AppShell.Header>
      <Burger
        opened={isSidebarOpened}
        onClick={() => setIsSidebarOpened(!isSidebarOpened)}
        hiddenFrom="sm"
        size="sm"
      />

      <UnstyledButton onClick={() => onNavigate('/')}>
        <IconBrandReact />
      </UnstyledButton>

      <UnstyledButton onClick={() => onNavigate('/')}>
        <Title order={3}>{import.meta.env.VITE_APP_NAME}</Title>
      </UnstyledButton>

      <div className="flex-1" />

      <ThemeButton />

      <UserButton
        name={userNickname}
        email={userEmail}
        onClick={() => onNavigate('/profile')}
      />
    </AppShell.Header>
  );
};
