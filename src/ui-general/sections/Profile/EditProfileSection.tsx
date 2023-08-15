import { Card, Stack, TextInput, Textarea, Button, Title } from '@mantine/core';
import { useForm, isNotEmpty } from '@mantine/form';

export const EditProfileSection = () => {
  const form = useForm({
    initialValues: {
      nickname: '',
      email: '',
      introduction: '',
    },
    validate: {
      nickname: isNotEmpty('Nickname is required'),
      email: isNotEmpty('Email is required'),
    },
  });

  const onSubmit = form.onSubmit((data) => {
    console.log(data);
  });

  return (
    <Card withBorder>
      <form onSubmit={onSubmit}>
        <Stack>
          <Title order={3}>Edit Profile</Title>

          <TextInput
            variant="filled"
            label="Nickname"
            placeholder="Nickname"
            withAsterisk
            {...form.getInputProps('nickname')}
          />

          <TextInput
            variant="filled"
            label="Email"
            placeholder="Email"
            withAsterisk
            {...form.getInputProps('email')}
          />

          <Textarea
            variant="filled"
            label="Introduction"
            placeholder="Introduction"
            autosize
            minRows={3}
            {...form.getInputProps('introduction')}
          />

          <Button type="submit" className="w-full" variant="light">
            Update
          </Button>
        </Stack>
      </form>
    </Card>
  );
};
