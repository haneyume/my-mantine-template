import { useRoutes } from 'react-router-dom';

import { AppProvider, RecordProvider } from './contexts';
import { AppLayout } from './layouts';
import {
  HomePage,
  CodeGenPage,
  ProfilePage,
  SettingsPage,
  NotFoundPage,
  ApiItemsPage,
} from './pages';

export const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/codegen',
      element: <CodeGenPage />,
    },
    {
      path: '/profile',
      element: <ProfilePage />,
    },
    {
      path: '/settings',
      element: <SettingsPage />,
    },
    {
      path: '/api-items',
      element: <ApiItemsPage />,
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
