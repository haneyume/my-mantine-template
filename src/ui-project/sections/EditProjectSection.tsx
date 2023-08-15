import { Stack, Card, TextInput, Textarea, Button, Title } from '@mantine/core';
import { useForm, isNotEmpty } from '@mantine/form';

export const EditProjectSection = () => {
  const form = useForm({
    initialValues: {
      id: '',
      name: '',
      description: '',
    },
    validate: {
      id: isNotEmpty('Project ID is required'),
      name: isNotEmpty('Project name is required'),
    },
  });

  const onSubmit = form.onSubmit((data) => {
    console.log(data);
  });

  return (
    <Card withBorder>
      <form onSubmit={onSubmit}>
        <Stack>
          <Title order={3}>Edit Project</Title>

          <TextInput
            variant="filled"
            label="Project ID"
            placeholder="Project ID"
            disabled
            {...form.getInputProps('id')}
          />

          <TextInput
            variant="filled"
            label="Project name"
            placeholder="Project name"
            withAsterisk
            {...form.getInputProps('name')}
          />

          <Textarea
            variant="filled"
            label="Project description"
            placeholder="Project description"
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
