import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Navbar } from '@mantine/core';

import { RouteProject } from '@/Routes';
import { NavLinkSection } from '@/ui-shared/layouts';

export const ProjectNavbar = () => {
  const { projectId } = useParams();
  const { t } = useTranslation();

  const links = RouteProject.map((item) => ({
    ...item,
    path: `/project/${projectId}/${item.path}`,
    label: t(item.label),
  }));

  return (
    <Navbar width={{ base: 50 }}>
      <Navbar.Section>
        <NavLinkSection links={links} />
      </Navbar.Section>
    </Navbar>
  );
};
