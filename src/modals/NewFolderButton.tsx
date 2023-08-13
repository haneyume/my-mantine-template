import { ActionIcon, Tooltip } from '@mantine/core';
import { IconFolderPlus } from '@tabler/icons-react';

import { useAppDispatch, addOneApiItem } from '../app-redux';

export const NewFolderButton = () => {
  const dispatch = useAppDispatch();

  return (
    <Tooltip label="Add a folder">
      <ActionIcon
        onClick={() => {
          dispatch(addOneApiItem({ name: '', type: 'folder' }));
        }}
      >
        <IconFolderPlus size={18} />
      </ActionIcon>
    </Tooltip>
  );
};
