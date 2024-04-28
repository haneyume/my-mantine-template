import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Stack, Card, TextInput, Button, Title, Textarea } from '@mantine/core';
import { useForm, isNotEmpty } from '@mantine/form';

export type EditProjectFormData = {
  id: string;
  name: string;
  description: string;
};

export interface EditProjectProps {
  defaultData: EditProjectFormData;
  onSubmitForm: (data: EditProjectFormData) => void;
}

export const EditProject: FC<EditProjectProps> = ({
  defaultData,
  onSubmitForm,
}) => {
  const { t: tr } = useTranslation();

  const form = useForm({
    initialValues: {
      ...defaultData,
    },
    validate: {
      id: isNotEmpty(tr('Project ID is required')),
      name: isNotEmpty(tr('Project name is required')),
    },
  });

  const onSubmit = form.onSubmit((data) => {
    onSubmitForm(data);
  });

  return (
    <Card withBorder>
      <form onSubmit={onSubmit}>
        <Stack>
          <Title order={3}>{tr('Edit Project')}</Title>

          <TextInput
            label={tr('Project ID')}
            placeholder={tr('Please input project id')}
            required
            disabled
            {...form.getInputProps('id')}
          />

          <TextInput
            label={tr('Project name')}
            placeholder={tr('Please input project name')}
            required
            {...form.getInputProps('name')}
          />

          <Textarea
            label={tr('Project description')}
            placeholder={tr('Please input project description')}
            minRows={5}
            autosize
            {...form.getInputProps('description')}
          />

          <Button type="submit" className="w-full">
            {tr('Update')}
          </Button>
        </Stack>
      </form>
    </Card>
  );
};
