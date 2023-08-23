import { useState } from 'react';

import {
  ScrollArea,
  Card,
  Stack,
  Group,
  TextInput,
  Select,
  Textarea,
  Title,
  Tabs,
  Button,
} from '@mantine/core';

import axios from 'axios';
import ReactJson from 'react-json-view';

import {
  useAppDispatch,
  useAppSelector,
  updateOneApiItem,
  selectCurrentApiItemId,
  selectCurrentApiItem,
} from '@/app-redux';

// import { Test } from './property/PropertyUIs';
import { PropertyListItems } from '@/ui-shared/property-uis/PropertyListItems';
import { PropertyJsonPath } from '@/ui-shared/property-uis/PropertyJsonPath';

export const EditorContent = () => {
  const currentItem = useAppSelector(selectCurrentApiItem);

  if (!currentItem) {
    return null;
  }

  return (
    <ScrollArea className="h-full">
      <Card withBorder>
        <Stack>
          <Title order={3}>{currentItem.description}</Title>

          {/* <Test /> */}

          <Tabs defaultValue="0">
            <Tabs.List>
              <Tabs.Tab data-cy={`EditorContent-0`} value="0">
                Api Settings
              </Tabs.Tab>
              <Tabs.Tab data-cy={`EditorContent-1`} value="1">
                Request
              </Tabs.Tab>
              <Tabs.Tab data-cy={`EditorContent-2`} value="2">
                JSON Path
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="0" pt="xs">
              <BasicTab key={currentItem.id} />
            </Tabs.Panel>

            <Tabs.Panel value="1" pt="xs">
              <RequestTab key={currentItem.id} />
            </Tabs.Panel>

            <Tabs.Panel value="2" pt="xs">
              <PropertyJsonPath key={currentItem.id} />
            </Tabs.Panel>
          </Tabs>
        </Stack>
      </Card>
    </ScrollArea>
  );
};

const BasicTab = () => {
  const dispatch = useAppDispatch();
  const currentApiItemId = useAppSelector(selectCurrentApiItemId);
  const currentItem = useAppSelector(selectCurrentApiItem);

  if (!currentItem) {
    return null;
  }

  return (
    <Stack>
      <Group position="apart">
        <Select
          label="Method"
          variant="filled"
          data={['GET', 'POST', 'PUT', 'DELETE']}
          value={currentItem.method}
          onChange={(value) => {
            dispatch(
              updateOneApiItem({
                id: currentApiItemId,
                changes: { method: value! },
              }),
            );
          }}
        />

        <TextInput
          className="flex-1"
          variant="filled"
          label="Path"
          value={currentItem.path}
          onChange={(e) => {
            dispatch(
              updateOneApiItem({
                id: currentApiItemId,
                changes: { path: e.target.value },
              }),
            );
          }}
        />
      </Group>

      <TextInput
        className="flex-1"
        variant="filled"
        label="Description"
        value={currentItem.description}
        onChange={(e) => {
          dispatch(
            updateOneApiItem({
              id: currentApiItemId,
              changes: { description: e.target.value },
            }),
          );
        }}
      />

      <PropertyListItems label="Headers" field="headers" />

      <PropertyListItems label="Query Params" field="queryParams" />

      <PropertyListItems label="Path Variables" field="pathVariables" />

      <Textarea
        variant="filled"
        label="Body"
        minRows={5}
        autosize
        value={currentItem.body}
        onChange={(e) => {
          dispatch(
            updateOneApiItem({
              id: currentApiItemId,
              changes: { body: e.target.value },
            }),
          );
        }}
      />
    </Stack>
  );
};

const RequestTab = () => {
  const dispatch = useAppDispatch();
  const currentApiItemId = useAppSelector(selectCurrentApiItemId);
  const currentItem = useAppSelector(selectCurrentApiItem);
  const [loading, setLoading] = useState<boolean>(false);

  if (!currentItem) {
    return null;
  }

  const sendRequest = async () => {
    setLoading(true);

    const response = await axios({
      method: currentItem.method,
      url: currentItem.path,
      data: currentItem.body,
      headers: currentItem.headers?.reduce(
        (acc, item) => ({ ...acc, [item.key]: item.value }),
        {},
      ),
    });

    setLoading(false);

    dispatch(
      updateOneApiItem({
        id: currentApiItemId,
        changes: { response: response.data },
      }),
    );
  };

  return (
    <Stack>
      <Button
        data-cy={`RequestTab-sendRequest`}
        onClick={sendRequest}
        loading={loading}
      >
        Send Request
      </Button>

      <Card withBorder>
        <ReactJson
          src={(currentItem.response as any) || {}}
          theme={'monokai'}
          name={null}
          enableClipboard={false}
        />
      </Card>
    </Stack>
  );
};
