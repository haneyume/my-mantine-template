import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Stack, Card, TextInput, Textarea, Button, Title } from '@mantine/core';
import { useForm, isNotEmpty } from '@mantine/form';
import { notifications } from '@mantine/notifications';

import { useGetProjectByIdQuery, useUpdateProjectMutation } from '@/app-redux';

export const EditProjectSection = () => {
  const { projectId } = useParams();

  const { data } = useGetProjectByIdQuery(projectId!, {
    skip: !projectId,
  });
  const [updateProject] = useUpdateProjectMutation();

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

  useEffect(() => {
    if (data) {
      form.setValues({
        id: data.id,
        name: data.name,
        description: data.description,
      });
    }
  }, [data]);

  const onSubmit = form.onSubmit((data) => {
    updateProject(data);

    notifications.show({
      title: 'Success',
      message: 'Project updated',
    });
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
            withAsterisk
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
