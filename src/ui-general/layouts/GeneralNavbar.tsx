import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  Navbar,
  NavLink,
  Badge,
  Stack,
  Tooltip,
  Group,
  Button,
  UnstyledButton,
  Text,
  ScrollArea,
} from '@mantine/core';
import {
  IconHome,
  IconBox,
  IconCode,
  IconUser,
  IconSettings,
  IconBook,
} from '@tabler/icons-react';

import { useGetOrganizationsQuery } from '@/app-redux';

import { NewOrganizationButton } from '../modals/NewOrganizationButton';

export const GeneralNavbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data } = useGetOrganizationsQuery();

  const links = [
    {
      icon: IconHome,
      label: 'Home',
      path: '/',
      notifications: 0,
    },
    {
      icon: IconBox,
      label: 'Projects',
      path: '/projects',
      notifications: 0,
    },
    {
      icon: IconCode,
      label: 'CodeGen',
      path: '/codegen',
      notifications: 0,
    },
    {
      icon: IconUser,
      label: 'Profile',
      path: '/profile',
      notifications: 0,
    },
    {
      icon: IconSettings,
      label: 'Settings',
      path: '/settings',
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

      <Navbar.Section
        className="p-3 border-0 border-t border-b border-solid border-gray-700"
        grow
        component={ScrollArea}
      >
        <Group position="apart">
          <Text size="xs" weight={500} color="dimmed">
            Organizations
          </Text>
          <NewOrganizationButton />
        </Group>

        <Stack className="my-3" spacing={5}>
          {data?.map((organization, index) => {
            return (
              <UnstyledButton
                key={index}
                className="hover:opacity-70"
                onClick={() =>
                  navigate(`/organization/${organization.id}/settings`)
                }
              >
                <Group>
                  <Text size="sm" weight={500} color="dimmed">
                    {organization.name}
                  </Text>
                </Group>
              </UnstyledButton>
            );
          })}
        </Stack>
      </Navbar.Section>

      <Navbar.Section className="p-3">
        <Button
          fullWidth
          variant="light"
          leftIcon={<IconBook />}
          onClick={() => window.open(import.meta.env.VITE_DOC_URL)}
        >
          Document
        </Button>
      </Navbar.Section>
    </Navbar>
  );
};
