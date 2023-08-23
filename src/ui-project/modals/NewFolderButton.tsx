import { ActionIcon, Tooltip } from '@mantine/core';
import { IconFolderPlus } from '@tabler/icons-react';

import { useAppDispatch, addOneApiItem } from '@/app-redux';

import { v4 as uuidv4 } from 'uuid';

export const NewFolderButton = () => {
  const dispatch = useAppDispatch();

  return (
    <Tooltip label="Add a folder">
      <ActionIcon
        onClick={() => {
          dispatch(
            addOneApiItem({
              id: uuidv4(),
              parent: 'root',
              name: 'New Folder',
              isFolder: true,
            }),
          );
        }}
      >
        <IconFolderPlus size={18} />
      </ActionIcon>
    </Tooltip>
  );
};
