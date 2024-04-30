import { FC } from 'react';
import { useRoutes, Outlet, useNavigate, useParams } from 'react-router-dom';

import { HomeLayout, TeamLayout, ProjectLayout } from '@/components';

import {
  //
  HomePage,
  HomeProfilePage,
  HomeSettingsPage,
  //
  TeamOverviewPage,
  TeamSettingsPage,
  //
  ProjectOverviewPage,
  ProjectSettingsPage,
} from '@/pages';

import {
  useAppDispatch,
  useAppSelector,
  selectIsSidebarOpened,
  selectIsSecondarySidebarOpened,
  setIsSidebarOpened,
} from '@/app-redux';

export const AuthedAppRoutes: FC = () => {
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
          path: 'profile',
          element: <HomeProfilePage />,
        },
        {
          path: 'settings',
          element: <HomeSettingsPage />,
        },
      ],
    },
    {
      path: '/team/:teamId',
      element: <TeamLayoutWrapper />,
      children: [
        {
          path: '',
          element: <TeamOverviewPage />,
        },
        {
          path: 'settings',
          element: <TeamSettingsPage />,
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
        {
          path: 'settings',
          element: <ProjectSettingsPage />,
        },
      ],
    },
  ]);

  return routes;
};

const HomeLayoutWrapper: FC = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const isSidebarOpened = useAppSelector(selectIsSidebarOpened);

  return (
    <HomeLayout
      isSidebarOpened={isSidebarOpened || false}
      setIsSidebarOpened={(value) => {
        dispatch(setIsSidebarOpened(value));
      }}
      onNavigate={(path) => navigate(path)}
    >
      <Outlet />
    </HomeLayout>
  );
};

const TeamLayoutWrapper: FC = () => {
  const navigate = useNavigate();
  const { teamId = '' } = useParams();

  const dispatch = useAppDispatch();
  const isSidebarOpened = useAppSelector(selectIsSidebarOpened);

  return (
    <TeamLayout
      teamId={teamId}
      isSidebarOpened={isSidebarOpened || false}
      setIsSidebarOpened={(value) => {
        dispatch(setIsSidebarOpened(value));
      }}
      onNavigate={(path) => navigate(path)}
    >
      <Outlet />
    </TeamLayout>
  );
};

const ProjectLayoutWrapper: FC = () => {
  const navigate = useNavigate();
  const { projectId = '' } = useParams();

  const dispatch = useAppDispatch();
  const isSidebarOpened = useAppSelector(selectIsSidebarOpened);
  const isSecondarySidebarOpened = useAppSelector(
    selectIsSecondarySidebarOpened,
  );

  return (
    <ProjectLayout
      projectId={projectId}
      isSidebarOpened={isSidebarOpened || false}
      setIsSidebarOpened={(value) => {
        dispatch(setIsSidebarOpened(value));
      }}
      isSecondarySidebarOpened={isSecondarySidebarOpened || false}
      onNavigate={(path) => navigate(path)}
    >
      <Outlet />
    </ProjectLayout>
  );
};
