import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Stack, Card, TextInput, Button, Title, Textarea } from '@mantine/core';
import { useForm, isNotEmpty } from '@mantine/form';

export type EditTeamFormData = {
  id: string;
  name: string;
  description: string;
};

export interface EditTeamProps {
  defaultData: EditTeamFormData;
  onSubmitForm: (data: EditTeamFormData) => void;
}

export const EditTeam: FC<EditTeamProps> = ({ defaultData, onSubmitForm }) => {
  const { t: tr } = useTranslation();

  const form = useForm({
    initialValues: {
      ...defaultData,
    },
    validate: {
      id: isNotEmpty(tr('Team ID is required')),
      name: isNotEmpty(tr('Team name is required')),
    },
  });

  const onSubmit = form.onSubmit((data) => {
    onSubmitForm(data);
  });

  return (
    <Card withBorder>
      <form onSubmit={onSubmit}>
        <Stack>
          <Title order={3}>{tr('Edit Team')}</Title>

          <TextInput
            label={tr('Team ID')}
            placeholder={tr('Please input team id')}
            required
            disabled
            {...form.getInputProps('id')}
          />

          <TextInput
            label={tr('Team name')}
            placeholder={tr('Please input team name')}
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
