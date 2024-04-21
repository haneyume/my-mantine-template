import { FC } from 'react';
import { useRoutes, Outlet, useNavigate, useParams } from 'react-router-dom';

import { HomeLayout, ProjectLayout } from '@/components';

import {
  //
  HomePage,
  HomeSettingsPage,
  //
  ProjectOverviewPage,
} from '@/pages';

export const AuthedAppContent: FC = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomeLayoutWrapper />,
      children: [
        {
          path: '',
          element: <HomePage />,
        },
        {
          path: 'settings',
          element: <HomeSettingsPage />,
        },
      ],
    },
    {
      path: '/project/:projectId',
      element: <ProjectLayoutWrapper />,
      children: [
        {
          path: '',
          element: <ProjectOverviewPage />,
        },
      ],
    },
  ]);

  return routes;
};

const HomeLayoutWrapper: FC = () => {
  const navigate = useNavigate();

  return (
    <HomeLayout
      isSidebarOpened={false}
      setIsSidebarOpened={() => {}}
      userNickname=""
      userEmail=""
      onNavigate={(path) => navigate(path)}
    >
      <Outlet />
    </HomeLayout>
  );
};

const ProjectLayoutWrapper: FC = () => {
  const navigate = useNavigate();
  const { projectId = '' } = useParams();

  return (
    <ProjectLayout
      projectId={projectId}
      isSidebarOpened={false}
      setIsSidebarOpened={() => {}}
      isSecondarySidebarOpened={false}
      userNickname=""
      userEmail=""
      onNavigate={(path) => navigate(path)}
    >
      <Outlet />
    </ProjectLayout>
  );
};
