import { useNavigate } from 'react-router-dom';
import { Stack, NavLink, Badge, Tooltip } from '@mantine/core';

import type { BaseRoute } from '@/Routes';

export const NavLinkSection = ({ links }: { links: BaseRoute[] }) => {
  const navigate = useNavigate();

  return (
    <Stack className="my-5" spacing={5}>
      {links.map((link, index) => {
        const Icon = link.icon;

        return (
          <Tooltip key={index} label={link.label} position="bottom">
            <NavLink
              data-cy={`AppNavbar-${link.label}`}
              icon={<Icon size={18} />}
              label={link.label}
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
  );
};
