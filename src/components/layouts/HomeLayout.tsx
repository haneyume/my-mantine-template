import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { AppShell, NavLink, ScrollArea } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';

import { IconHome, IconUser, IconSettings } from '@tabler/icons-react';

import { AppTitle } from './AppTitle';
import { AppFooter } from './AppFooter';

export interface AppLayoutProps {
  children: ReactNode;
  isSidebarOpened: boolean;
  setIsSidebarOpened: (value: boolean) => void;
  userNickname: string;
  userEmail: string;
  onNavigate: (path: string) => void;
}

export const HomeLayout: FC<AppLayoutProps> = ({
  children,
  isSidebarOpened,
  setIsSidebarOpened,
  userNickname,
  userEmail,
  onNavigate,
}) => {
  const { t: tr } = useTranslation();

  const { ref, height } = useElementSize();

  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 40 }}
      navbar={{
        width: 200,
        breakpoint: 'sm',
        collapsed: { mobile: !isSidebarOpened },
      }}
    >
      <AppTitle
        isSidebarOpened={isSidebarOpened}
        setIsSidebarOpened={setIsSidebarOpened}
        userNickname={userNickname}
        userEmail={userEmail}
        onNavigate={onNavigate}
      />

      <AppShell.Navbar>
        <AppShell.Section grow>
          <NavLink
            label={tr('Home')}
            leftSection={<IconHome size={18} />}
            onClick={() => onNavigate('/')}
            active={window.location.pathname === '/'}
          />
          <NavLink
            label={tr('Profile')}
            leftSection={<IconUser size={18} />}
            onClick={() => onNavigate('/profile')}
            active={window.location.pathname === '/profile'}
          />
          <NavLink
            label={tr('Settings')}
            leftSection={<IconSettings size={18} />}
            onClick={() => onNavigate('/settings')}
            active={window.location.pathname === '/settings'}
          />
        </AppShell.Section>

        <AppShell.Section grow>123s</AppShell.Section>

        <AppShell.Section>123s</AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main ref={ref}>
        <ScrollArea p="md" style={{ height }}>
          {children}
        </ScrollArea>
      </AppShell.Main>

      <AppFooter />
    </AppShell>
  );
};
