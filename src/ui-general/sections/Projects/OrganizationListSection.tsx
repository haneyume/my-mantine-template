import { Group, Stack, TextInput, Title } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

import { NewProjectButton } from '../../modals/NewProjectButton';
import { ProjectInOrganizationListSection } from './ProjectInOrganizationListSection';

import { useGetOrganizationsQuery } from '@/app-redux';

export const OrganizationListSection = () => {
  const { data } = useGetOrganizationsQuery();

  return (
    <>
      <Group className="mb-5">
        <TextInput placeholder="Search" icon={<IconSearch size="0.8rem" />} />
      </Group>

      <Stack>
        {data?.map((organization, index) => {
          return (
            <Stack key={index}>
              <Group>
                <Title order={2}>{organization.name}</Title>
                <NewProjectButton organizationId={organization.id} />
              </Group>

              <ProjectInOrganizationListSection
                organizationId={organization.id}
              />
            </Stack>
          );
        })}
      </Stack>
    </>
  );
};
