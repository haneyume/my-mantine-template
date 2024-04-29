import { FC } from 'react';

import { AppShell, Text } from '@mantine/core';

export interface AppFooterProps {}

export const AppFooter: FC<AppFooterProps> = ({}) => {
  return (
    <AppShell.Footer>
      <Text size="sm">Status: Ready</Text>

      <div className="flex-1" />

      <Text size="sm">{`Version: ${import.meta.env.VITE_VERSION}`}</Text>
    </AppShell.Footer>
  );
};
