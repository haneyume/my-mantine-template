import { Stack, Card, Title, Table, Group, Button } from '@mantine/core';

export const MembersPage = () => {
  return (
    <Stack>
      <Card withBorder>
        <Stack>
          <Group position="apart">
            <Title order={3}>Members</Title>
            <Button variant="light">Invite</Button>
          </Group>

          <Table withBorder>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nickname</th>
                <th>Email</th>
                <th>Role</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
        </Stack>
      </Card>
    </Stack>
  );
};
