import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import '@/utils/i18n';

import { MantineProvider, LoadingOverlay } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/spotlight/styles.css';
import '@mantine/tiptap/styles.css';
import 'mantine-datatable/styles.css';
import '@/index.css';

import {
  AppReduxProvider,
  store,
  //
  useAppSelector,
  selectIsLoading,
} from '@/app-redux';

import { theme } from '@/configurations/theme';
import { cssVariablesResolver } from '@/configurations/cssVariablesResolver';
import { AuthedAppRoutes } from '@/configurations/AuthedAppRoutes';

export const App: FC<{}> = () => {
  return (
    <AppReduxProvider store={store}>
      <AppContent />
    </AppReduxProvider>
  );
};

const AppContent: FC = () => {
  const isLoading = useAppSelector(selectIsLoading);

  return (
    <MantineProvider
      defaultColorScheme="dark"
      theme={theme}
      cssVariablesResolver={cssVariablesResolver}
    >
      <ModalsProvider>
        <Notifications position="top-right" />

        <BrowserRouter>
          <LoadingOverlay visible={isLoading} />
          <AuthedAppRoutes />
        </BrowserRouter>
      </ModalsProvider>
    </MantineProvider>
  );
};
