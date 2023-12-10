import { BrowserRouter } from 'react-router-dom';

import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

import { theme } from '@/theme';

import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/spotlight/styles.css';
import '@mantine/tiptap/styles.css';

import '@/index.css';

export const App = () => {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <ModalsProvider>
        <Notifications position="top-right" />

        <BrowserRouter>
          <AuthedAppContent />
        </BrowserRouter>
      </ModalsProvider>
    </MantineProvider>
  );
};

const AuthedAppContent = () => {
  return (
    <div className="container mx-auto">
      <h1>App Content</h1>
    </div>
  );
};
