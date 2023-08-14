import { Card, Stack, TextInput, Textarea, Button, Title } from '@mantine/core';

export const EditProfileSection = () => {
  return (
    <Card withBorder>
      <Stack>
        <Title order={2}>Edit Profile</Title>

        <TextInput label="Nickname" placeholder="Nickname" withAsterisk />

        <TextInput label="Email" placeholder="Email" withAsterisk />

        <Textarea label="Introduction" placeholder="Introduction" autosize />

        <Button className="w-full" variant="light" onClick={() => {}}>
          Update
        </Button>
      </Stack>
    </Card>
  );
};
