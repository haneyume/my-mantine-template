import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Select, useMantineColorScheme } from '@mantine/core';

export interface ColorSchemeSelectProps {}

export const ColorSchemeSelect: FC<ColorSchemeSelectProps> = ({}) => {
  const { t: tr } = useTranslation();
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <Select
      label={tr('Color Scheme')}
      data={[
        { label: tr('Light'), value: 'light' },
        { label: tr('Dark'), value: 'dark' },
      ]}
      value={colorScheme}
      onChange={(value) => setColorScheme(value as 'light' | 'dark')}
    />
  );
};
