import { ReactNode } from 'react';

import '@/utils/i18n';

import { MantineProvider, Paper } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

import { theme } from '@/configurations/theme';

import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/spotlight/styles.css';
import '@mantine/tiptap/styles.css';

import '@/index.css';

export default ({ children }: { children: ReactNode }) => {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <ModalsProvider>
        <Notifications position="top-right" />

        <div className="w-full h-screen form-editor-canvas flex justify-center items-center p-10">
          <Paper className="p-5 w-1/2 resize overflow-auto">{children}</Paper>
        </div>
      </ModalsProvider>
    </MantineProvider>
  );
};
