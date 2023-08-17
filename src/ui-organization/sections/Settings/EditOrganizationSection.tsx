import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Stack, Card, TextInput, Textarea, Button, Title } from '@mantine/core';
import { useForm, isNotEmpty } from '@mantine/form';
import { notifications } from '@mantine/notifications';

import {
  useGetOrganizationByIdQuery,
  useUpdateOrganizationMutation,
} from '@/app-redux';

export const EditOrganizationSection = () => {
  const { organizationId } = useParams();

  const { data } = useGetOrganizationByIdQuery(organizationId!, {
    skip: !organizationId,
  });
  const [updateOrganization] = useUpdateOrganizationMutation();

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
    updateOrganization(data);

    notifications.show({
      title: 'Success',
      message: 'Organization updated',
    });
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
