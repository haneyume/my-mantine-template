import { useRoutes, Outlet } from 'react-router-dom';

import { AppProvider, RecordProvider } from '@/ui-shared/contexts';

import { AppLayout } from '@/ui-shared/layouts';
import { NotFoundPage } from '@/ui-shared/pages';

import { GeneralLayout } from '@/ui-general/layouts';
import { OrganizationLayout } from '@/ui-organization/layouts';
import { ProjectLayout } from '@/ui-project/layouts';

import { RouteGeneral, RouteOrganization, RouteProject } from './Routes';

export const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <GeneralLayoutBase />,
      children: RouteGeneral,
    },
    {
      path: '/organization/:organizationId',
      element: <OrganizationLayoutBase />,
      children: RouteOrganization,
    },
    {
      path: '/project/:projectId',
      element: <ProjectLayoutBase />,
      children: RouteProject,
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

const GeneralLayoutBase = () => {
  return (
    <GeneralLayout>
      <Outlet />
    </GeneralLayout>
  );
};

const OrganizationLayoutBase = () => {
  return (
    <OrganizationLayout>
      <Outlet />
    </OrganizationLayout>
  );
};

const ProjectLayoutBase = () => {
  return (
    <ProjectLayout>
      <Outlet />
    </ProjectLayout>
  );
};
