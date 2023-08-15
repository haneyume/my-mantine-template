import { Stack, Card, Title, Table } from '@mantine/core';

export const InvoicesPage = () => {
  return (
    <Stack>
      <Card withBorder>
        <Stack>
          <Title order={3}>Invoices</Title>

          <Table withBorder>
            <thead>
              <tr>
                <th>ID</th>
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
