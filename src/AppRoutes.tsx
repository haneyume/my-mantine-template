import { useRoutes } from 'react-router-dom';

import { AppProvider } from './contexts';
import { AppLayout } from './layouts';
import { HomePage, SettingPage, NotFoundPage } from './pages';

export const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/settings',
      element: <SettingPage />,
    },
    {
      path: '/*',
      element: <NotFoundPage />,
    },
  ]);

  return (
    <AppProvider>
      <AppLayout>{routes}</AppLayout>
    </AppProvider>
  );
};
