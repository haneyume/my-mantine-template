import { Stack, Card, TextInput, Textarea, Button, Title } from '@mantine/core';

export const EditOrganizationSection = () => {
  return (
    <Card withBorder>
      <Stack>
        <Title order={3}>Edit Organization</Title>

        <TextInput
          label="Organization ID"
          placeholder="Organization ID"
          disabled
        />

        <TextInput
          label="Organization name"
          placeholder="Organization name"
          withAsterisk
        />

        <Textarea
          label="Organization description"
          placeholder="Organization description"
          autosize
          minRows={3}
        />

        <Button className="w-full" variant="light" onClick={() => {}}>
          Update
        </Button>
      </Stack>
    </Card>
  );
};
