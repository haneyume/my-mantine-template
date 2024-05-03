import { FC, ReactNode } from 'react';
// import { useTranslation } from 'react-i18next';

import { AppShell, ScrollArea } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';

import { AppTitle } from './AppTitle';
import { AppFooter } from './AppFooter';

export interface AppLayoutProps {
  children: ReactNode;
  isSidebarOpened: boolean;
  setIsSidebarOpened: (value: boolean) => void;
  isSecondarySidebarOpened: boolean;
  onNavigate: (path: string) => void;
  navbarWidth?: number;
  navbarComponent?: ReactNode;
}

export const AppLayoutRegular: FC<AppLayoutProps> = ({
  children,
  isSidebarOpened,
  setIsSidebarOpened,
  isSecondarySidebarOpened,
  onNavigate,
  navbarWidth = 200, // 50 for thin sidebar
  navbarComponent,
}) => {
  // const { t: tr } = useTranslation();

  const { ref, width, height } = useElementSize();

  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 40 }}
      navbar={{
        width: navbarWidth,
        breakpoint: 'sm',
        collapsed: { mobile: !isSidebarOpened },
      }}
      aside={{
        width: 500,
        breakpoint: 'md',
        collapsed: {
          desktop: !isSecondarySidebarOpened,
          mobile: !isSecondarySidebarOpened,
        },
      }}
    >
      <AppTitle
        isSidebarOpened={isSidebarOpened}
        setIsSidebarOpened={setIsSidebarOpened}
        onNavigate={onNavigate}
      />

      {navbarComponent}

      <AppShell.Main ref={ref}>
        <ScrollArea style={{ width, height }}>{children}</ScrollArea>
      </AppShell.Main>

      <AppShell.Aside id="app-layout-aside">
        <div />
      </AppShell.Aside>

      <AppFooter />
    </AppShell>
  );
};
