import { useEffect } from 'react';

import {
  Group,
  TextInput,
  Box,
  Button,
  Center,
  ActionIcon,
  Text,
  Card,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconGripVertical, IconX } from '@tabler/icons-react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import type { ApiItem } from '../app-redux/types';

import { useAppSelector, useAppDispatch, updateOneApiItem } from '../app-redux';

export const PropertyListItems = ({
  label,
  field,
}: {
  label: string;
  field: keyof ApiItem;
}) => {
  const currentItem = useAppSelector((state) => state.apiItems.currentItem);
  const dispatch = useAppDispatch();

  if (!currentItem) {
    return null;
  }

  const form = useForm({
    initialValues: {
      items: [{ key: '', value: '' }],
    },
  });

  useEffect(() => {
    if (currentItem.data?.[field]) {
      const defaultValue = currentItem.data[field];
      form.setValues({ items: defaultValue });
    }
  }, []);

  useEffect(() => {
    // Deep copy the array of objects
    const value = JSON.parse(JSON.stringify(form.values.items));

    dispatch(
      updateOneApiItem({
        [field]: value,
      }),
    );
  }, [form.values]);

  const fields = form.values.items.map((_, index) => (
    <Draggable key={index} index={index} draggableId={index.toString()}>
      {(provided) => (
        <Group
          ref={provided.innerRef}
          mt="xs"
          noWrap
          {...provided.draggableProps}
        >
          <Center {...provided.dragHandleProps}>
            <IconGripVertical size="1.2rem" />
          </Center>
          <TextInput
            className="flex-1"
            variant="filled"
            placeholder="key"
            {...form.getInputProps(`items.${index}.key`)}
          />
          <TextInput
            className="flex-1"
            variant="filled"
            placeholder="value"
            {...form.getInputProps(`items.${index}.value`)}
          />
          <ActionIcon onClick={() => form.removeListItem('items', index)}>
            <IconX size="1.2rem" />
          </ActionIcon>
        </Group>
      )}
    </Draggable>
  ));

  return (
    <Box>
      <Text size={'0.875rem'}>{label}</Text>

      <Card withBorder>
        <DragDropContext
          onDragEnd={({ destination, source }) =>
            form.reorderListItem('items', {
              from: source.index,
              to: destination!.index,
            })
          }
        >
          <Droppable droppableId="dnd-list" direction="vertical">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {fields}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <Group mt="md">
          <Button
            fullWidth
            variant="light"
            onClick={() => form.insertListItem('items', { key: '', value: '' })}
          >
            Add
          </Button>
        </Group>
      </Card>
    </Box>
  );
};
