import { useRef, useEffect } from 'react';

import { Group, Stack, Text } from '@mantine/core';
import {
  IconCaretRight,
  IconCaretDown,
  IconHttpGet,
  IconHttpPost,
  IconHttpPut,
  IconHttpDelete,
} from '@tabler/icons-react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Tree, TreeMethods } from '@minoru/react-dnd-treeview';

import clsx from 'clsx';

import {
  useAppSelector,
  useAppDispatch,
  setAllApiItems,
  selectApiItem,
} from '../app-redux';

import { NewFolderButton, NewItemButton } from '../modals';

export const EditorSidebar = () => {
  const items = useAppSelector((state) => state.apiItems.items);
  const selectedId = useAppSelector((state) => state.apiItems.selectedId);
  // const currentItem = useAppSelector((state) => state.apiItem.currentItem);
  const dispatch = useAppDispatch();

  const treeRef = useRef<TreeMethods>(null);

  useEffect(() => {
    treeRef.current?.openAll();
  }, [treeRef]);

  const renderIcon = (method: string) => {
    switch (method) {
      case 'GET':
        return <IconHttpGet size={14} />;
      case 'POST':
        return <IconHttpPost size={14} />;
      case 'PUT':
        return <IconHttpPut size={14} />;
      case 'DELETE':
        return <IconHttpDelete size={14} />;
      default:
        return null;
    }
  };

  return (
    <Stack spacing={0}>
      <SidebarHeader />

      <DndProvider backend={HTML5Backend}>
        <Tree
          ref={treeRef}
          tree={items}
          rootId={'root'}
          onDrop={(newTreeData: any) => {
            dispatch(setAllApiItems(newTreeData));
          }}
          sort={false}
          insertDroppableFirst={false}
          canDrop={(_, { dragSource, dropTargetId }) => {
            if (dragSource?.parent === dropTargetId) {
              return true;
            }
          }}
          dropTargetOffset={5}
          placeholderRender={(_, { depth }) => (
            <div className="w-full flex" style={{ marginLeft: depth * 20 }}>
              <div className="flex-1 h-[2px] bg-[#007fd4]" />
            </div>
          )}
          render={(node, { depth, isOpen, onToggle }) => {
            const index = items.findIndex((item) => item.id === node.id);

            return (
              <div
                data-cy={`EditorSidebar-item-${index}`}
                className={clsx(
                  'flex items-center space-x-2 cursor-pointer hover:bg-gray-800',
                  selectedId === node.id && 'bg-gray-700',
                )}
                style={{ paddingLeft: 10 + depth * 20 }}
                onClick={() => {
                  if (node.droppable) {
                    onToggle();
                  }

                  if (!node.droppable) {
                    dispatch(selectApiItem(node.id as string));
                  }
                }}
              >
                {node.droppable && isOpen && <IconCaretDown size={14} />}
                {node.droppable && !isOpen && <IconCaretRight size={14} />}

                {renderIcon(node.data?.method || '')}

                <div>{node.text}</div>
              </div>
            );
          }}
        />
      </DndProvider>
    </Stack>
  );
};

const SidebarHeader = () => {
  return (
    <Group position="right" spacing={5}>
      <Text>API Explorer</Text>
      <div className="flex-1" />
      <NewFolderButton />
      <NewItemButton />
    </Group>
  );
};
