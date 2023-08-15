import { useRoutes, Outlet } from 'react-router-dom';

import { AppProvider, RecordProvider } from '@/ui-shared/contexts';

import { AppLayout } from '@/ui-shared/layouts';
import { NotFoundPage } from '@/ui-shared/pages';

import { GeneralLayout } from '@/ui-general/layouts';
import {
  HomePage,
  ProjectsPage,
  CodeGenPage,
  ProfilePage,
  SettingsPage,
} from '@/ui-general/pages';

import { OrganizationLayout } from '@/ui-organization/layouts';
import {
  SettingsPage as OrganizationSettingsPage,
  MembersPage,
  PlanPage,
  PaymentMethodsPage,
  InvoicesPage,
} from '@/ui-organization/pages';

import { ProjectLayout } from '@/ui-project/layouts';
import { ApiItemsPage } from '@/ui-project/pages';

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
          path: 'projects',
          element: <ProjectsPage />,
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
      path: '/organization/:id',
      element: <OrganizationLayoutBase />,
      children: [
        {
          path: 'settings',
          element: <OrganizationSettingsPage />,
        },
        {
          path: 'members',
          element: <MembersPage />,
        },
        {
          path: 'plan',
          element: <PlanPage />,
        },
        {
          path: 'payment-methods',
          element: <PaymentMethodsPage />,
        },
        {
          path: 'invoices',
          element: <InvoicesPage />,
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
