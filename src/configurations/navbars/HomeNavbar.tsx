import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { AppShell, NavLink } from '@mantine/core';

import { IconHome, IconUser, IconSettings } from '@tabler/icons-react';

import { TeamList } from './TeamList';
import { FullFeatureButton } from './FullFeatureButton';

export const HomeNavbar: FC<{
  onNavigate: (path: string) => void;
}> = ({ onNavigate }) => {
  const { t: tr } = useTranslation();

  return (
    <AppShell.Navbar>
      <AppShell.Section grow>
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
      </AppShell.Section>

      <AppShell.Section
        className="border-0 border-t border-b border-solid border-neutral-700"
        p="sm"
        grow
      >
        <TeamList onNavigate={onNavigate} />
      </AppShell.Section>

      <AppShell.Section p="sm">
        <FullFeatureButton />
      </AppShell.Section>
    </AppShell.Navbar>
  );
};
