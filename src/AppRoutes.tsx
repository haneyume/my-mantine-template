import { useRoutes } from 'react-router-dom';

import { AppProvider } from './contexts';
import { AppLayout } from './layouts';
import { NotFoundPage } from './pages';

export const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <div />,
    },
    {
      path: '/settings',
      element: <div />,
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
