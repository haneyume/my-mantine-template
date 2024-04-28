import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { AppShell, NavLink, ScrollArea } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';

import { IconLayoutDashboard, IconSettings } from '@tabler/icons-react';

import { AppTitle } from './AppTitle';

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

  const { ref, width } = useElementSize();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 200,
        breakpoint: 'sm',
        collapsed: { mobile: !isSidebarOpened },
      }}
      // padding="md"
    >
      <AppTitle
        isSidebarOpened={isSidebarOpened}
        setIsSidebarOpened={setIsSidebarOpened}
        userNickname={userNickname}
        userEmail={userEmail}
        onNavigate={onNavigate}
      />

      <AppShell.Navbar>
        <div className="w-full h-full flex">
          <div className="py-5 flex-1 flex flex-col items-center">
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
          </div>
        </div>
      </AppShell.Navbar>

      <AppShell.Main ref={ref}>
        <ScrollArea style={{ height: 'calc(100vh - 60px)' }}>
          <div style={{ width, padding: 20 }}>{children}</div>
        </ScrollArea>
      </AppShell.Main>
    </AppShell>
  );
};
