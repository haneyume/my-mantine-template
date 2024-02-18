import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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

import { Home } from './pages/Home';
import { About } from './pages/About';

export const App = () => {
  return (
    <AppReduxProvider store={store}>
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <ModalsProvider>
          <Notifications position="top-right" />

          <RouterProvider router={router} />
        </ModalsProvider>
      </MantineProvider>
    </AppReduxProvider>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);
