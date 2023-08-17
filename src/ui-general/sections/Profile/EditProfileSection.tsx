import { useEffect } from 'react';

import { Card, Stack, TextInput, Textarea, Button, Title } from '@mantine/core';
import { useForm, isNotEmpty } from '@mantine/form';
import { notifications } from '@mantine/notifications';

import { useGetProfileQuery, useUpdateProfileMutation } from '@/app-redux';

export const EditProfileSection = () => {
  const { data } = useGetProfileQuery();
  const [updateProfile] = useUpdateProfileMutation();

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

  useEffect(() => {
    if (data) {
      form.setValues({
        nickname: data.nickname,
        email: data.email,
        introduction: data.introduction,
      });
    }
  }, [data]);

  const onSubmit = form.onSubmit((data) => {
    updateProfile(data);

    notifications.show({
      title: 'Success',
      message: 'Profile updated',
    });
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
