import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Navbar } from '@mantine/core';

import { RouteOrganization } from '@/Routes';
import { NavLinkSection } from '@/ui-shared/layouts';

export const OrganizationNavbar = () => {
  const { organizationId } = useParams();
  const { t } = useTranslation();

  const links = RouteOrganization.map((item) => ({
    ...item,
    path: `/organization/${organizationId}/${item.path}`,
    label: t(item.label),
  }));

  return (
    <Navbar width={{ base: 200 }}>
      <Navbar.Section>
        <NavLinkSection links={links} />
      </Navbar.Section>
    </Navbar>
  );
};
