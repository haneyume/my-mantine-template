import { useNavigate } from 'react-router-dom';

import { AppShell, Burger, Title, UnstyledButton } from '@mantine/core';

import { IconBrandReact } from '@tabler/icons-react';

import { UserButton } from '@/components';

import {
  useAppDispatch,
  useAppSelector,
  setIsSidebarOpened,
  selectIsSidebarOpened,
} from '@/app-redux';

export const AppTitle = () => {
  const dispatch = useAppDispatch();
  const isSidebarOpened = useAppSelector(selectIsSidebarOpened);

  const navigate = useNavigate();

  return (
    <AppShell.Header>
      <div className="px-5 h-full flex items-center space-x-5">
        <Burger
          opened={isSidebarOpened}
          onClick={() => dispatch(setIsSidebarOpened(!isSidebarOpened))}
          hiddenFrom="sm"
          size="sm"
        />

        <UnstyledButton onClick={() => navigate('/')}>
          <IconBrandReact />
        </UnstyledButton>

        <UnstyledButton onClick={() => navigate('/')}>
          <Title order={3}>{import.meta.env.VITE_APP_NAME}</Title>
        </UnstyledButton>

        <div className="flex-1" />

        <UserButton
          name="Test User"
          email="test@test.com"
          onClick={() => navigate('/about')}
        />
      </div>
    </AppShell.Header>
  );
};
