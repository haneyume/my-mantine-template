import {
  Modal,
  Stack,
  Button,
  ActionIcon,
  TextInput,
  Textarea,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useForm, isNotEmpty } from '@mantine/form';
import { IconPlus } from '@tabler/icons-react';

import { useCreateOrganizationMutation } from '@/app-redux';

export const NewOrganizationButton = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <ActionIcon variant="default" size={18} onClick={open}>
        <IconPlus size={12} stroke={1.5} />
      </ActionIcon>

      <ModalInstance opened={opened} close={close} />
    </>
  );
};

const ModalInstance = ({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) => {
  const [createOrganization] = useCreateOrganizationMutation();

  const form = useForm({
    initialValues: {
      name: '',
      description: '',
    },
    validate: {
      name: isNotEmpty('Organization name is required'),
    },
  });

  const onSubmit = form.onSubmit((data) => {
    createOrganization({
      name: data.name,
      description: data.description,
    });

    form.reset();

    close();
  });

  return (
    <Modal opened={opened} onClose={close} title="New Organization" centered>
      <form onSubmit={onSubmit}>
        <Stack>
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
            Create
          </Button>
        </Stack>
      </form>
    </Modal>
  );
};
