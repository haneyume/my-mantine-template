import { ReactNode } from 'react';

import { AppShell } from '@mantine/core';

import { AppHeader } from '@/ui-shared/layouts/AppHeader';
import { AppFooter } from '@/ui-shared/layouts/AppFooter';

import { GeneralNavbar } from './GeneralNavbar';

export const GeneralLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AppShell
      header={<AppHeader />}
      navbar={<GeneralNavbar />}
      footer={<AppFooter />}
      padding={0}
    >
      {children}
    </AppShell>
  );
};
