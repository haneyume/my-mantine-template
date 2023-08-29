import { useNavigate } from 'react-router-dom';

import {
  Navbar,
  Stack,
  Group,
  UnstyledButton,
  Text,
  ScrollArea,
} from '@mantine/core';

import { useGetOrganizationsQuery } from '@/app-redux';

import { NewOrganizationButton } from '../modals/NewOrganizationButton';

export const OrganizationListSection = () => {
  const navigate = useNavigate();

  const { data } = useGetOrganizationsQuery();

  return (
    <Navbar.Section
      className="flex-1 p-3 border-0 border-t border-b border-solid border-gray-700"
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
  );
};
