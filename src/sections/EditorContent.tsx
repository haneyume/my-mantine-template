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

import { useAppSelector, useAppDispatch, updateOneApiItem } from '../app-redux';

// import { Test } from './property/PropertyUIs';
import { PropertyListItems } from '../property-uis/PropertyListItems';
import { PropertyJsonPath } from '../property-uis/PropertyJsonPath';

export const EditorContent = () => {
  const currentItem = useAppSelector((state) => state.apiItems.currentItem);

  if (!currentItem) {
    return null;
  }

  return (
    <ScrollArea className="h-full">
      <Card withBorder>
        <Stack>
          <Title order={3}>{currentItem.text}</Title>

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
  const currentItem = useAppSelector((state) => state.apiItems.currentItem);
  const dispatch = useAppDispatch();

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
          value={currentItem.data?.method}
          onChange={(value) => {
            dispatch(updateOneApiItem({ method: value! }));
          }}
        />

        <TextInput
          className="flex-1"
          variant="filled"
          label="Path"
          value={currentItem.data?.path}
          onChange={(e) => {
            dispatch(updateOneApiItem({ path: e.target.value }));
          }}
        />
      </Group>

      <TextInput
        className="flex-1"
        variant="filled"
        label="Description"
        value={currentItem.data?.description}
        onChange={(e) => {
          dispatch(updateOneApiItem({ description: e.target.value }));
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
        value={currentItem.data?.body}
        onChange={(e) => {
          dispatch(updateOneApiItem({ body: e.target.value }));
        }}
      />
    </Stack>
  );
};

const RequestTab = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const currentItem = useAppSelector((state) => state.apiItems.currentItem);
  const dispatch = useAppDispatch();

  if (!currentItem) {
    return null;
  }

  const sendRequest = async () => {
    setLoading(true);

    const response = await axios({
      method: currentItem.data?.method,
      url: currentItem.data?.path,
      data: currentItem.data?.body,
      headers: currentItem.data?.headers?.reduce(
        (acc, item) => ({ ...acc, [item.key]: item.value }),
        {},
      ),
    });

    setLoading(false);

    dispatch(updateOneApiItem({ response: response.data }));
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
          src={(currentItem.data?.response as any) || {}}
          theme={'monokai'}
          name={null}
          enableClipboard={false}
        />
      </Card>
    </Stack>
  );
};
