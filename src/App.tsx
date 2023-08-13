import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

import { ReduxProvider, store } from './app-redux';
import { AppRoutes } from './AppRoutes';

export const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');

  return (
    <ReduxProvider store={store}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={(value) => {
          setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
        }}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <ModalsProvider>
            <Notifications position="top-right" />

            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </ModalsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </ReduxProvider>
  );
};
