import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { AppShell, NavLink, ScrollArea } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';

import { IconLayoutDashboard, IconSettings } from '@tabler/icons-react';

import { AppTitle } from './AppTitle';
import { AppFooter } from './AppFooter';

export interface AppLayoutProps {
  teamId: string;
  children: ReactNode;
  isSidebarOpened: boolean;
  setIsSidebarOpened: (value: boolean) => void;
  userNickname: string;
  userEmail: string;
  onNavigate: (path: string) => void;
}

export const TeamLayout: FC<AppLayoutProps> = ({
  teamId,
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
        <AppShell.Section>
          <NavLink
            label={tr('Overview')}
            leftSection={<IconLayoutDashboard size={18} />}
            onClick={() => onNavigate(`/team/${teamId}`)}
            active={window.location.pathname === `/team/${teamId}`}
          />
          <NavLink
            label={tr('Settings')}
            leftSection={<IconSettings size={18} />}
            onClick={() => onNavigate(`/team/${teamId}/settings`)}
            active={window.location.pathname === `/team/${teamId}/settings`}
          />
        </AppShell.Section>
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
