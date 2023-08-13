import { z, ZodSchema } from 'zod';

const mySchema = z.string();

import { TextInput, Text, Button } from '@mantine/core';

import {
  // useAppSelector,
  useAppDispatch,
  addOneApiItem,
} from '../app-redux';

export const PropertyFieldString = ({ z }: { z: ZodSchema }) => {
  // const currentItem = useAppSelector((state) => state.apiItem.currentItem);
  const dispatch = useAppDispatch();

  return (
    <>
      <Text>{JSON.stringify(z)}</Text>

      <Button
        onClick={() => dispatch(addOneApiItem({ name: '', type: 'item' }))}
      >
        newItem
      </Button>

      {/* <Button onClick={() => dispatch(updateCurrentItem({}))}>updateValue</Button> */}
      <TextInput />
    </>
  );
};

export const Test = () => {
  return <PropertyFieldString z={mySchema} />;
};
