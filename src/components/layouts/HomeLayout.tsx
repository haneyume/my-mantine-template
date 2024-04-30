import { FC, ReactNode } from 'react';
// import { useTranslation } from 'react-i18next';

import { AppShell, ScrollArea } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';

import { AppTitle } from './AppTitle';
import { AppFooter } from './AppFooter';

import { HomeLayoutMenus } from '@/configurations/menus/HomeLayoutMenus';
import { TeamList } from './TeamList';
import { FullFeatureButton } from './FullFeatureButton';

export interface AppLayoutProps {
  children: ReactNode;
  isSidebarOpened: boolean;
  setIsSidebarOpened: (value: boolean) => void;
  onNavigate: (path: string) => void;
}

export const HomeLayout: FC<AppLayoutProps> = ({
  children,
  isSidebarOpened,
  setIsSidebarOpened,
  onNavigate,
}) => {
  // const { t: tr } = useTranslation();

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
        onNavigate={onNavigate}
      />

      <AppShell.Navbar>
        <AppShell.Section grow>
          <HomeLayoutMenus onNavigate={onNavigate} />
        </AppShell.Section>

        <AppShell.Section
          className="border-0 border-t border-b border-solid border-neutral-700"
          p="sm"
          grow
        >
          <TeamList onNavigate={onNavigate} />
        </AppShell.Section>

        <AppShell.Section p="sm">
          <FullFeatureButton />
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
