import { Stack, Card, TextInput, Button, Title } from '@mantine/core';
import { useForm, isNotEmpty } from '@mantine/form';
import { notifications } from '@mantine/notifications';

export const KeySettingSection = () => {
  const form = useForm({
    initialValues: {
      openaiApiKey: window.localStorage.getItem('openaiApiKey') || '',
    },
    validate: {
      openaiApiKey: isNotEmpty('Please enter your OpenAI API Key'),
    },
  });

  const onSubmit = form.onSubmit((data) => {
    window.localStorage.setItem('openaiApiKey', data.openaiApiKey);

    notifications.show({
      title: 'Success',
      message: 'Key updated',
    });
  });

  return (
    <Card withBorder>
      <form onSubmit={onSubmit}>
        <Stack>
          <Title order={3}>Key Settings</Title>

          <TextInput
            variant="filled"
            placeholder="sk-..."
            label="OpenAI API Key"
            withAsterisk
            {...form.getInputProps('openaiApiKey')}
          />

          <Button type="submit" className="w-full" variant="light">
            Update
          </Button>
        </Stack>
      </form>
    </Card>
  );
};
