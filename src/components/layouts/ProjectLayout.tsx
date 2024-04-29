import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { AppShell, ActionIcon, Tooltip } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';

import { IconLayoutDashboard, IconSettings } from '@tabler/icons-react';

import { AppTitle } from './AppTitle';
import { AppFooter } from './AppFooter';

export interface AppLayoutProps {
  projectId: string;
  children: ReactNode;
  isSidebarOpened: boolean;
  setIsSidebarOpened: (value: boolean) => void;
  isSecondarySidebarOpened: boolean;
  userNickname: string;
  userEmail: string;
  onNavigate: (path: string) => void;
}

export const ProjectLayout: FC<AppLayoutProps> = ({
  projectId,
  children,
  isSidebarOpened,
  setIsSidebarOpened,
  isSecondarySidebarOpened,
  userNickname,
  userEmail,
  onNavigate,
}) => {
  const { t: tr } = useTranslation();

  const { ref, width, height } = useElementSize();

  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 40 }}
      navbar={{
        width: 50,
        breakpoint: 'sm',
        collapsed: { mobile: !isSidebarOpened },
      }}
      aside={{
        width: 500,
        breakpoint: 'md',
        collapsed: {
          desktop: !isSecondarySidebarOpened,
          mobile: !isSecondarySidebarOpened,
        },
      }}
    >
      <AppTitle
        isSidebarOpened={isSidebarOpened}
        setIsSidebarOpened={setIsSidebarOpened}
        userNickname={userNickname}
        userEmail={userEmail}
        onNavigate={onNavigate}
      />

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
            active={
              window.location.pathname === `/project/${projectId}/settings`
            }
          />
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main ref={ref}>
        <div style={{ width, height }}>{children}</div>
      </AppShell.Main>

      <AppShell.Aside id="chatbot-layout">
        {/* <ChatBotLayout width="100%" height="100%" /> */}
      </AppShell.Aside>

      <AppFooter />
    </AppShell>
  );
};

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
