import { ReactNode } from 'react';

import { AppShell } from '@mantine/core';

import { AppHeader } from '@/ui-shared/layouts/AppHeader';
import { AppFooter } from '@/ui-shared/layouts/AppFooter';

import { ProjectNavbar } from './ProjectNavbar';

export const ProjectLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AppShell
      header={<AppHeader />}
      navbar={<ProjectNavbar />}
      footer={<AppFooter />}
      padding={0}
    >
      {children}
    </AppShell>
  );
};
