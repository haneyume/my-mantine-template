import { FC } from 'react';

import { AppShell, Burger, Title, UnstyledButton } from '@mantine/core';

import { IconBrandReact } from '@tabler/icons-react';

import { ThemeButton } from '../buttons/ThemeButton';
import { UserButton } from '../buttons/UserButton2';

export interface AppTitleProps {
  isSidebarOpened: boolean;
  setIsSidebarOpened: (value: boolean) => void;
  onNavigate: (path: string) => void;
}

export const AppTitle: FC<AppTitleProps> = ({
  isSidebarOpened,
  setIsSidebarOpened,
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

      <UserButton onClick={() => onNavigate('/profile')} />
    </AppShell.Header>
  );
};
