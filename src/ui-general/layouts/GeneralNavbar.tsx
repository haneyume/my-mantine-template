import { useTranslation } from 'react-i18next';

import { Navbar, Button } from '@mantine/core';
import { IconBook } from '@tabler/icons-react';

import { RouteGeneral } from '@/Routes';
import { NavLinkSection } from '@/ui-shared/layouts';

import { OrganizationListSection } from './OrganizationListSection';

export const GeneralNavbar = () => {
  const { t } = useTranslation();

  const links = RouteGeneral.map((item) => ({
    ...item,
    path: `/${item.path}`,
    label: t(item.label),
  }));

  return (
    <Navbar width={{ base: 200 }}>
      <Navbar.Section className="flex-1">
        <NavLinkSection links={links} />
      </Navbar.Section>

      <OrganizationListSection />

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
