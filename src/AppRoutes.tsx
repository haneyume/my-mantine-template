import { useRoutes } from 'react-router-dom';

import { AppProvider, RecordProvider } from './contexts';
import { AppLayout } from './layouts';
import { HomePage, SettingsPage, NotFoundPage } from './pages';

export const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/settings',
      element: <SettingsPage />,
    },
    {
      path: '/*',
      element: <NotFoundPage />,
    },
  ]);

  return (
    <AppProvider>
      <RecordProvider>
        <AppLayout>{routes}</AppLayout>
      </RecordProvider>
    </AppProvider>
  );
};
