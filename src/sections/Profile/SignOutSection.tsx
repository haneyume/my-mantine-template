import { useNavigate } from 'react-router-dom';

import { Card, Stack, Button, Title } from '@mantine/core';

export const SignOutSection = () => {
  const navigate = useNavigate();

  return (
    <Card withBorder>
      <Stack>
        <Title order={2}>Sign Out</Title>

        <Button
          className="w-full"
          variant="light"
          color="red"
          onClick={() => {
            navigate('/');
          }}
        >
          Sign Out
        </Button>
      </Stack>
    </Card>
  );
};
