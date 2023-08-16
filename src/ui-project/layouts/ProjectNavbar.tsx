import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Navbar, NavLink, Badge, Stack, Tooltip } from '@mantine/core';
import { IconChartBar, IconSettings, IconApi } from '@tabler/icons-react';

export const ProjectNavbar = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const { t } = useTranslation();

  const links = [
    {
      icon: IconChartBar,
      label: 'Overview',
      path: `/project/${projectId}/overview`,
      notifications: 0,
    },
    {
      icon: IconApi,
      label: 'ApiItems',
      path: `/project/${projectId}/api-items`,
      notifications: 0,
    },
    {
      icon: IconSettings,
      label: 'Settings',
      path: `/project/${projectId}/settings`,
      notifications: 0,
    },
  ];

  return (
    <Navbar width={{ base: 50 }}>
      <Navbar.Section>
        <Stack className="my-5" spacing={5}>
          {links.map((link, index) => {
            const Icon = link.icon;

            return (
              <Tooltip key={index} label={t(link.label)} position="bottom">
                <NavLink
                  data-cy={`AppNavbar-${link.label}`}
                  icon={<Icon size={18} />}
                  label={t(link.label)}
                  onClick={() => navigate(link.path)}
                  active={link.path === window.location.pathname}
                  rightSection={
                    link.notifications > 0 && (
                      <Badge size="sm" variant="filled">
                        {link.notifications}
                      </Badge>
                    )
                  }
                />
              </Tooltip>
            );
          })}
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
};
