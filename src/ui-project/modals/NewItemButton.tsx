import { ActionIcon, Tooltip } from '@mantine/core';
import { IconFilePlus } from '@tabler/icons-react';

import { useAppDispatch, addOneApiItem } from '@/app-redux';

import { v4 as uuidv4 } from 'uuid';

export const NewItemButton = () => {
  const dispatch = useAppDispatch();

  return (
    <Tooltip label="Add an api">
      <ActionIcon
        onClick={() => {
          dispatch(
            addOneApiItem({
              id: uuidv4(),
              parent: 'root',
              name: 'New Api',
              isFolder: false,
              method: 'GET',
              path: 'https://example.com/api/v1/new-api',
            }),
          );
        }}
      >
        <IconFilePlus size={18} />
      </ActionIcon>
    </Tooltip>
  );
};
