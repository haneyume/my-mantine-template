import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { AppShell, ActionIcon, Tooltip } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';

import { IconLayoutDashboard } from '@tabler/icons-react';

import { AppTitle } from './AppTitle';

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
      // padding="md"
    >
      <AppTitle
        isSidebarOpened={isSidebarOpened}
        setIsSidebarOpened={setIsSidebarOpened}
        userNickname={userNickname}
        userEmail={userEmail}
        onNavigate={onNavigate}
      />

      <AppShell.Navbar>
        <div className="w-full h-full flex">
          <div className="py-5 flex-1 flex flex-col items-center">
            <SidebarButton
              icon={<IconLayoutDashboard size={18} />}
              label={tr('Overview')}
              onClick={() => onNavigate(`/project/${projectId}`)}
            />
          </div>
        </div>
      </AppShell.Navbar>

      <AppShell.Main ref={ref}>
        <div style={{ width, height }}>{children}</div>
      </AppShell.Main>

      <AppShell.Aside id="chatbot-layout">
        {/* <ChatBotLayout width="100%" height="100%" /> */}
      </AppShell.Aside>
    </AppShell>
  );
};

const SidebarButton: FC<{
  icon: ReactNode;
  label: string;
  onClick: () => void;
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
