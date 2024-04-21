import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { AppShell, NavLink, ScrollArea } from '@mantine/core';

import { IconHome, IconSettings } from '@tabler/icons-react';

import { AppTitle } from './AppTitle';

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

  return (
    <AppShell
      header={{ height: 60 }}
      // footer={{ height: 40 }}
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
              label={tr('Home')}
              leftSection={<IconHome size={18} />}
              onClick={() => onNavigate('/')}
              active={window.location.pathname === '/'}
            />
            <NavLink
              label={tr('Settings')}
              leftSection={<IconSettings size={18} />}
              onClick={() => onNavigate('/settings')}
              active={window.location.pathname === '/settings'}
            />
          </div>
        </div>
      </AppShell.Navbar>

      <AppShell.Main>
        <ScrollArea p="md" style={{ height: 'calc(100vh - 60px)' }}>
          {children}
        </ScrollArea>
      </AppShell.Main>
    </AppShell>
  );
};
