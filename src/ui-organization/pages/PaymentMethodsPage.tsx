import { Stack, Card, Title, Table } from '@mantine/core';

export const PaymentMethodsPage = () => {
  return (
    <Stack>
      <Card withBorder>
        <Stack>
          <Title order={3}>Payment Methods</Title>

          <Table withBorder>
            <thead>
              <tr>
                <th>ID</th>
                <th>Card Number</th>
                <th>Card Type</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
        </Stack>
      </Card>
    </Stack>
  );
};
