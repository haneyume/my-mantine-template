import { Text, TextInput } from '@mantine/core';

import { useAppSelector } from '../app-redux';

import { store } from '../app-redux';
import type { RootState } from '../app-redux';

import { ApiItem } from '../app-redux/types';

type ItemField = {
  apiItems: ApiItem;
};

interface Props<T extends keyof Pick<RootState, 'apiItems'>> {
  category: T;
  field: keyof ItemField[T];
  action?: string;
  targetObject?: string;
}

export function PropertyFieldString<
  T extends keyof Pick<RootState, 'apiItems'>,
>({
  category,
  field,
  action = 'updateCurrentItem',
  targetObject = 'currentItem',
}: Props<T>) {
  // @ts-ignore
  const currentItem = useAppSelector((state) => state[category][targetObject]);
  if (!currentItem) {
    return <Text>Error: currentItem === undefined</Text>;
  }

  const currentItemData = currentItem?.data;
  if (!currentItemData) {
    return <Text>Error: currentItemData === undefined</Text>;
  }

  return (
    <TextInput
      label={field as string}
      value={currentItemData[field] as string}
      onChange={(event) => {
        store.dispatch({
          type: `${category}/${action}`,
          payload: {
            [field]: event.currentTarget.value,
          },
        });
      }}
    />
  );
}

// const Test = () => {
//   return (
//     <PropertyFieldString
//       category="apiItem"
//       field="method"
//       action="updateCurrentItem"
//       targetObject="currentItem"
//     />
//   );
// };
