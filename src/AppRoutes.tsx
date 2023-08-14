import { useRoutes, Outlet } from 'react-router-dom';

import { AppProvider, RecordProvider } from '@/ui-shared/contexts';

import { AppLayout } from '@/ui-shared/layouts';
import { NotFoundPage } from '@/ui-shared/pages';

import { GeneralLayout } from '@/ui-general/layouts';
import {
  HomePage,
  CodeGenPage,
  ProfilePage,
  SettingsPage,
} from '@/ui-general/pages';

import { ProjectLayout } from '@/ui-project/layouts';
import { ApiItemsPage } from '@/ui-project/pages';

const GeneralLayoutBase = () => {
  return (
    <GeneralLayout>
      <Outlet />
    </GeneralLayout>
  );
};

const ProjectLayoutBase = () => {
  return (
    <ProjectLayout>
      <Outlet />
    </ProjectLayout>
  );
};

export const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <GeneralLayoutBase />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: 'codegen',
          element: <CodeGenPage />,
        },
        {
          path: 'profile',
          element: <ProfilePage />,
        },
        {
          path: 'settings',
          element: <SettingsPage />,
        },
      ],
    },
    {
      path: '/project/:id',
      element: <ProjectLayoutBase />,
      children: [
        {
          path: 'api-items',
          element: <ApiItemsPage />,
        },
      ],
    },
    {
      path: '/*',
      element: (
        <AppLayout>
          <NotFoundPage />
        </AppLayout>
      ),
    },
  ]);

  return (
    <AppProvider>
      <RecordProvider>{routes}</RecordProvider>
    </AppProvider>
  );
};
