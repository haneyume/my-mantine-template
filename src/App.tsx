import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import '@/utils/i18n';

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

import { AppReduxProvider, store } from '@/app-redux';
import { AuthedAppContent } from '@/AuthedAppContent';

export const App: FC<{}> = () => {
  return (
    <AppReduxProvider store={store}>
      <AppContent />
    </AppReduxProvider>
  );
};

const AppContent: FC = () => {
  return (
    <MantineProvider
      defaultColorScheme="dark"
      theme={theme}
      cssVariablesResolver={(theme) => ({
        variables: {
          '--mantine-hero-height': theme.other.heroHeight,
        },
        light: {
          '--mantine-color-body': '#fff',
        },
        dark: {
          '--mantine-color-body': 'var(--mantine-color-dark-9)',
          '--mantine-color-default-border': 'var(--mantine-color-dark-9)',
        },
      })}
    >
      <ModalsProvider>
        <Notifications position="top-right" />

        <BrowserRouter>
          <AuthedAppContent />
        </BrowserRouter>
      </ModalsProvider>
    </MantineProvider>
  );
};
