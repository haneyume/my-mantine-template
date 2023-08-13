import { ActionIcon, Tooltip } from '@mantine/core';
import { IconFilePlus } from '@tabler/icons-react';

import { useAppDispatch, addOneApiItem } from '../app-redux';

export const NewItemButton = () => {
  const dispatch = useAppDispatch();

  return (
    <Tooltip label="Add an api">
      <ActionIcon
        onClick={() => {
          dispatch(addOneApiItem({ name: '', type: 'item' }));
        }}
      >
        <IconFilePlus size={18} />
      </ActionIcon>
    </Tooltip>
  );
};
