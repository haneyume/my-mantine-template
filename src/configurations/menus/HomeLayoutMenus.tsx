import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { NavLink } from '@mantine/core';

import { IconHome, IconUser, IconSettings } from '@tabler/icons-react';

export const HomeLayoutMenus: FC<{
  onNavigate: (path: string) => void;
}> = ({ onNavigate }) => {
  const { t: tr } = useTranslation();

  return (
    <>
      <NavLink
        label={tr('Home')}
        leftSection={<IconHome size={18} />}
        onClick={() => onNavigate('/')}
        active={window.location.pathname === '/'}
      />
      <NavLink
        label={tr('Profile')}
        leftSection={<IconUser size={18} />}
        onClick={() => onNavigate('/profile')}
        active={window.location.pathname === '/profile'}
      />
      <NavLink
        label={tr('Settings')}
        leftSection={<IconSettings size={18} />}
        onClick={() => onNavigate('/settings')}
        active={window.location.pathname === '/settings'}
      />
    </>
  );
};
