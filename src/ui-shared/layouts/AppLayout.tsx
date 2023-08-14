import { ReactNode } from 'react';

import { AppShell } from '@mantine/core';

import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AppShell header={<AppHeader />} footer={<AppFooter />}>
      {children}
    </AppShell>
  );
};
