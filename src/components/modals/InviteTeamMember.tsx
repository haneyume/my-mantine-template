import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Stack, Button, TextInput, Select } from '@mantine/core';
import { useForm, isNotEmpty } from '@mantine/form';

export type InviteTeamMemberFormData = {
  email: string;
  role: string;
};

export interface InviteTeamMemberProps {
  onSubmitForm: (data: InviteTeamMemberFormData) => void;
}

export const InviteTeamMember: FC<InviteTeamMemberProps> = ({
  onSubmitForm,
}) => {
  const { t: tr } = useTranslation();

  const form = useForm<InviteTeamMemberFormData>({
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
          data={[
            {
              value: 'manager',
              label: tr('Manager'),
            },
            {
              value: 'member',
              label: tr('Member'),
            },
          ]}
          {...form.getInputProps('role')}
        />

        <Button type="submit" className="w-full">
          {tr('Invite')}
        </Button>
      </Stack>
    </form>
  );
};
