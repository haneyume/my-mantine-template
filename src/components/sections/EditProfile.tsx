import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Card, Stack, TextInput, Textarea, Button, Title } from '@mantine/core';
import { useForm, isNotEmpty } from '@mantine/form';

export type EditProfileFormData = {
  email: string;
  nickname: string;
  introduction: string;
};

export interface EditProfileProps {
  defaultData: EditProfileFormData;
  onSubmitForm: (data: EditProfileFormData) => void;
}

export const EditProfile: FC<EditProfileProps> = ({
  defaultData,
  onSubmitForm,
}) => {
  const { t: tr } = useTranslation();

  const form = useForm<EditProfileFormData>({
    initialValues: {
      ...defaultData,
    },
    validate: {
      email: isNotEmpty(tr('Email is required')),
      nickname: isNotEmpty(tr('Nickname is required')),
    },
  });

  const onSubmit = form.onSubmit((data) => {
    onSubmitForm(data);
  });

  return (
    <Card withBorder>
      <form onSubmit={onSubmit}>
        <Stack>
          <Title order={3}>{tr('Edit Profile')}</Title>

          <TextInput
            label={tr('Email')}
            placeholder={tr('Please input email')}
            required
            disabled
            {...form.getInputProps('email')}
          />

          <TextInput
            label={tr('Nickname')}
            placeholder={tr('Please input nickname')}
            required
            {...form.getInputProps('nickname')}
          />

          <Textarea
            label={tr('Introduction')}
            placeholder={tr('Please input introduction')}
            {...form.getInputProps('introduction')}
          />

          <Button type="submit" className="w-full">
            {tr('Update')}
          </Button>
        </Stack>
      </form>
    </Card>
  );
};
