import { ReactNode } from 'react';

import { AppShell } from '@mantine/core';

import { AppHeader } from '@/ui-shared/layouts/AppHeader';
import { AppFooter } from '@/ui-shared/layouts/AppFooter';

import { OrganizationNavbar } from './OrganizationNavbar';

export const OrganizationLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AppShell
      header={<AppHeader />}
      navbar={<OrganizationNavbar />}
      footer={<AppFooter />}
    >
      {children}
    </AppShell>
  );
};
