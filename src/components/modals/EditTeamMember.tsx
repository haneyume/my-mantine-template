import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Stack, Button, TextInput, Select } from '@mantine/core';
import { useForm, isNotEmpty } from '@mantine/form';

export type EditTeamMemberFormData = {
  email: string;
  role: string;
};

export interface EditTeamMemberProps {
  onSubmitForm: (data: EditTeamMemberFormData) => void;
}

export const EditTeamMember: FC<EditTeamMemberProps> = ({ onSubmitForm }) => {
  const { t: tr } = useTranslation();

  const form = useForm<EditTeamMemberFormData>({
    initialValues: {
      email: '',
      role: '',
    },
    validate: {
      email: isNotEmpty(tr('Email is required')),
      role: isNotEmpty(tr('Role is required')),
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
          label={tr('Email')}
          placeholder={tr('Please input email')}
          required
          {...form.getInputProps('email')}
        />

        <Select
          label={tr('Role')}
          placeholder={tr('Please select role')}
          required
          data={[
            {
              value: 'admin',
              label: tr('Admin'),
            },
            {
              value: 'member',
              label: tr('Member'),
            },
          ]}
          {...form.getInputProps('role')}
        />

        <Button type="submit" className="w-full">
          {tr('Edit')}
        </Button>
      </Stack>
    </form>
  );
};
