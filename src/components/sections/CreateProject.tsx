import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Stack, Button, TextInput, Textarea } from '@mantine/core';
import { useForm, isNotEmpty } from '@mantine/form';

export type CreateProjectFormData = {
  name: string;
  description: string;
};

export interface CreateProjectProps {
  onSubmitForm: (data: CreateProjectFormData) => void;
}

export const CreateProject: FC<CreateProjectProps> = ({ onSubmitForm }) => {
  const { t: tr } = useTranslation();

  const form = useForm<CreateProjectFormData>({
    initialValues: {
      name: '',
      description: '',
    },
    validate: {
      name: isNotEmpty(tr('Project name is required')),
    },
  });

  const onSubmit = form.onSubmit((data) => {
    onSubmitForm(data);

    form.reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <Stack>
        <TextInput
          label={tr('Project name')}
          placeholder={tr('Please input project name')}
          required
          {...form.getInputProps('name')}
        />

        <Textarea
          label={tr('Project description')}
          placeholder={tr('Project description')}
          {...form.getInputProps('description')}
        />

        <Button type="submit" className="w-full">
          {tr('Create')}
        </Button>
      </Stack>
    </form>
  );
};
