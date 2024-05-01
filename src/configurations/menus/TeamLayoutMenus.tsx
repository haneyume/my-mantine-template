import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { NavLink } from '@mantine/core';

import {
  IconLayoutDashboard,
  IconUsers,
  IconSettings,
} from '@tabler/icons-react';

export const TeamLayoutMenus: FC<{
  teamId: string;
  onNavigate: (path: string) => void;
}> = ({ teamId, onNavigate }) => {
  const { t: tr } = useTranslation();

  return (
    <>
      <NavLink
        label={tr('Overview')}
        leftSection={<IconLayoutDashboard size={18} />}
        onClick={() => onNavigate(`/team/${teamId}`)}
        active={window.location.pathname === `/team/${teamId}`}
      />
      <NavLink
        label={tr('Members')}
        leftSection={<IconUsers size={18} />}
        onClick={() => onNavigate(`/team/${teamId}/members`)}
        active={window.location.pathname === `/team/${teamId}/members`}
      />
      <NavLink
        label={tr('Settings')}
        leftSection={<IconSettings size={18} />}
        onClick={() => onNavigate(`/team/${teamId}/settings`)}
        active={window.location.pathname === `/team/${teamId}/settings`}
      />
    </>
  );
};
