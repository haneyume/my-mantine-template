import { Modal, Stack, Button, TextInput, Textarea } from '@mantine/core';
import { useForm, isNotEmpty } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';

import { useCreateProjectMutation } from '@/app-redux';

export const NewProjectButton = ({
  organizationId,
}: {
  organizationId: string;
}) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Button variant="light" onClick={open}>
        + New Project
      </Button>

      <ModalInstance
        organizationId={organizationId}
        opened={opened}
        close={close}
      />
    </>
  );
};

const ModalInstance = ({
  organizationId,
  opened,
  close,
}: {
  organizationId: string;
  opened: boolean;
  close: () => void;
}) => {
  const [createProject] = useCreateProjectMutation();

  const form = useForm({
    initialValues: {
      name: '',
      description: '',
    },
    validate: {
      name: isNotEmpty('Project name is required'),
    },
  });

  const onSubmit = form.onSubmit((data) => {
    createProject({
      name: data.name,
      description: data.description,
      organizationId,
    });

    form.reset();

    close();
  });

  return (
    <Modal opened={opened} onClose={close} title="New Project" centered>
      <form onSubmit={onSubmit}>
        <Stack>
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
            Create
          </Button>
        </Stack>
      </form>
    </Modal>
  );
};
