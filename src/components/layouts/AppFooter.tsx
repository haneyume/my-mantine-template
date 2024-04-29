import { FC } from 'react';

import { AppShell, Text } from '@mantine/core';

export interface AppFooterProps {}

export const AppFooter: FC<AppFooterProps> = ({}) => {
  return (
    <AppShell.Footer>
      <Text>Status: Ready</Text>

      <div className="flex-1" />

      <Text>{`Version: ${import.meta.env.VITE_VERSION}`}</Text>
    </AppShell.Footer>
  );
};
