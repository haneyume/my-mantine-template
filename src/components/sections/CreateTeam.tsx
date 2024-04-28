import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Stack, Button, TextInput } from '@mantine/core';
import { useForm, isNotEmpty } from '@mantine/form';

export type CreateTeamFormData = {
  name: string;
};

export interface CreateTeamProps {
  onSubmitForm: (data: CreateTeamFormData) => void;
}

export const CreateTeam: FC<CreateTeamProps> = ({ onSubmitForm }) => {
  const { t: tr } = useTranslation();

  const form = useForm<CreateTeamFormData>({
    initialValues: {
      name: '',
    },
    validate: {
      name: isNotEmpty(tr('Team name is required')),
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
          label={tr('Team name')}
          placeholder={tr('Please input team name')}
          required
          {...form.getInputProps('name')}
        />

        <Button type="submit" className="w-full">
          {tr('Create')}
        </Button>
      </Stack>
    </form>
  );
};
