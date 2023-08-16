import { Stack, Card, TextInput, Textarea, Button, Title } from '@mantine/core';
import { useForm, isNotEmpty } from '@mantine/form';

export const EditOrganizationSection = () => {
  const form = useForm({
    initialValues: {
      id: '',
      name: '',
      description: '',
    },
    validate: {
      id: isNotEmpty('Organization ID is required'),
      name: isNotEmpty('Organization name is required'),
    },
  });

  const onSubmit = form.onSubmit((data) => {
    console.log(data);
  });

  return (
    <Card withBorder>
      <form onSubmit={onSubmit}>
        <Stack>
          <Title order={3}>Edit Organization</Title>

          <TextInput
            variant="filled"
            label="Organization ID"
            placeholder="Organization ID"
            withAsterisk
            disabled
            {...form.getInputProps('id')}
          />

          <TextInput
            variant="filled"
            label="Organization name"
            placeholder="Organization name"
            withAsterisk
            {...form.getInputProps('name')}
          />

          <Textarea
            variant="filled"
            label="Organization description"
            placeholder="Organization description"
            autosize
            minRows={3}
            {...form.getInputProps('description')}
          />

          <Button type="submit" className="w-full" variant="light">
            Update
          </Button>
        </Stack>
      </form>
    </Card>
  );
};
