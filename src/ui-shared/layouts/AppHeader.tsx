import { useNavigate } from 'react-router-dom';

import { Header, Title, UnstyledButton } from '@mantine/core';
import { IconBrandReact } from '@tabler/icons-react';

import { ThemeButton, UserButton } from '../buttons';

import { useGetProfileQuery } from '@/app-redux';

export const AppHeader = () => {
  const navigate = useNavigate();

  const { data } = useGetProfileQuery();

  return (
    <Header height={{ base: 70 }}>
      <div className="px-5 h-full flex items-center space-x-5">
        <UnstyledButton
          data-cy={`AppHeader-brand`}
          onClick={() => navigate('/')}
        >
          <IconBrandReact />
        </UnstyledButton>

        <UnstyledButton
          data-cy={`AppHeader-title`}
          onClick={() => navigate('/')}
        >
          <Title order={3}>{import.meta.env.VITE_APP_NAME}</Title>
        </UnstyledButton>

        <div className="flex-1" />

        <ThemeButton />

        <UserButton
          name={data?.nickname || ''}
          email={data?.email || ''}
          onClick={() => navigate('/profile')}
        />
      </div>
    </Header>
  );
};
