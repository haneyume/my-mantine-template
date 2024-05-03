import { FC } from 'react';
import { useRoutes, Outlet, useNavigate, useParams } from 'react-router-dom';

import { AppLayoutRegular } from '@/components';
import { HomeNavbar } from './navbars/HomeNavbar';
import { TeamNavbar } from './navbars/TeamNavbar';
import { ProjectNavbar } from './navbars/ProjectNavbar';

import {
  //
  HomePage,
  HomeProfilePage,
  HomeSettingsPage,
  //
  TeamOverviewPage,
  TeamMembersPage,
  TeamSettingsPage,
  //
  ProjectOverviewPage,
  ProjectSettingsPage,
  //
  NotFoundPage,
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
        {
          path: '*',
          element: <NotFoundPage />,
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
          path: 'members',
          element: <TeamMembersPage />,
        },
        {
          path: 'settings',
          element: <TeamSettingsPage />,
        },
        {
          path: '*',
          element: <NotFoundPage />,
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
        {
          path: '*',
          element: <NotFoundPage />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);

  return routes;
};

const HomeLayoutWrapper: FC = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const isSidebarOpened = useAppSelector(selectIsSidebarOpened);
  const isSecondarySidebarOpened = useAppSelector(
    selectIsSecondarySidebarOpened,
  );

  return (
    <AppLayoutRegular
      isSidebarOpened={isSidebarOpened || false}
      setIsSidebarOpened={(value) => {
        dispatch(setIsSidebarOpened(value));
      }}
      isSecondarySidebarOpened={isSecondarySidebarOpened || false}
      onNavigate={(path) => navigate(path)}
      navbarComponent={<HomeNavbar onNavigate={(path) => navigate(path)} />}
    >
      <Outlet />
    </AppLayoutRegular>
  );
};

const TeamLayoutWrapper: FC = () => {
  const navigate = useNavigate();
  const { teamId = '' } = useParams();

  const dispatch = useAppDispatch();
  const isSidebarOpened = useAppSelector(selectIsSidebarOpened);
  const isSecondarySidebarOpened = useAppSelector(
    selectIsSecondarySidebarOpened,
  );

  return (
    <AppLayoutRegular
      isSidebarOpened={isSidebarOpened || false}
      setIsSidebarOpened={(value) => {
        dispatch(setIsSidebarOpened(value));
      }}
      isSecondarySidebarOpened={isSecondarySidebarOpened || false}
      onNavigate={(path) => navigate(path)}
      navbarComponent={
        <TeamNavbar teamId={teamId} onNavigate={(path) => navigate(path)} />
      }
    >
      <Outlet />
    </AppLayoutRegular>
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
    <AppLayoutRegular
      isSidebarOpened={isSidebarOpened || false}
      setIsSidebarOpened={(value) => {
        dispatch(setIsSidebarOpened(value));
      }}
      isSecondarySidebarOpened={isSecondarySidebarOpened || false}
      onNavigate={(path) => navigate(path)}
      navbarWidth={50}
      navbarComponent={
        <ProjectNavbar
          projectId={projectId}
          onNavigate={(path) => navigate(path)}
        />
      }
    >
      <Outlet />
    </AppLayoutRegular>
  );
};
