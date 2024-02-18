import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useMantineColorScheme, ActionIcon } from '@mantine/core';

import { IconSun, IconMoonStars } from '@tabler/icons-react';

export interface ThemeButtonProps {}

export const ThemeButton: FC<ThemeButtonProps> = ({}) => {
  const { t: tr } = useTranslation();

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="outline"
      // color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title={tr('Toggle color scheme')}
    >
      {dark ? <IconSun size="1.2rem" /> : <IconMoonStars size="1.2rem" />}
    </ActionIcon>
  );
};
