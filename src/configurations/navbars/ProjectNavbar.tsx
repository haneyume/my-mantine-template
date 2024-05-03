import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { AppShell, ActionIcon, Tooltip } from '@mantine/core';

import { IconLayoutDashboard, IconSettings } from '@tabler/icons-react';

const SidebarButton: FC<{
  icon: ReactNode;
  label: string;
  onClick: () => void;
  active?: boolean;
}> = ({ icon, label, onClick }) => {
  return (
    <Tooltip label={label}>
      <ActionIcon
        className="w-full h-[40px]"
        variant="subtle"
        color="gray"
        onClick={onClick}
      >
        {icon}
      </ActionIcon>
    </Tooltip>
  );
};

export const ProjectNavbar: FC<{
  projectId: string;
  onNavigate: (path: string) => void;
}> = ({ projectId, onNavigate }) => {
  const { t: tr } = useTranslation();

  return (
    <AppShell.Navbar>
      <AppShell.Section>
        <SidebarButton
          icon={<IconLayoutDashboard size={18} />}
          label={tr('Overview')}
          onClick={() => onNavigate(`/project/${projectId}`)}
          active={window.location.pathname === `/project/${projectId}`}
        />
        <SidebarButton
          icon={<IconSettings size={18} />}
          label={tr('Settings')}
          onClick={() => onNavigate(`/project/${projectId}/settings`)}
          active={window.location.pathname === `/project/${projectId}/settings`}
        />
      </AppShell.Section>
    </AppShell.Navbar>
  );
};
