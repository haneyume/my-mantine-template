import { useNavigate, useParams } from 'react-router-dom';

import { Navbar, NavLink, Badge, Stack } from '@mantine/core';
import {
  IconSettings,
  IconUsers,
  IconPlant,
  IconCreditCard,
  IconFileInvoice,
} from '@tabler/icons-react';

export const OrganizationNavbar = () => {
  const navigate = useNavigate();
  const { organizationId } = useParams();

  const links = [
    {
      icon: IconSettings,
      label: 'Settings',
      path: `/organization/${organizationId}/settings`,
      notifications: 0,
    },
    {
      icon: IconUsers,
      label: 'Members',
      path: `/organization/${organizationId}/members`,
      notifications: 0,
    },
    {
      icon: IconPlant,
      label: 'Plan',
      path: `/organization/${organizationId}/plan`,
      notifications: 0,
    },
    {
      icon: IconCreditCard,
      label: 'Payment Methods',
      path: `/organization/${organizationId}/payment-methods`,
      notifications: 0,
    },
    {
      icon: IconFileInvoice,
      label: 'Invoices',
      path: `/organization/${organizationId}/invoices`,
      notifications: 0,
    },
  ];

  return (
    <Navbar width={{ base: 200 }}>
      <Navbar.Section>
        <Stack className="my-5" spacing={5}>
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={index}
                icon={<Icon />}
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
            );
          })}
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
};
