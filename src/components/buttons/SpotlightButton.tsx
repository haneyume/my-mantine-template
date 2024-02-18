import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { rem, ActionIcon } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';

import {
  IconHome,
  IconDashboard,
  IconFileText,
  IconSearch,
} from '@tabler/icons-react';

export interface SpotlightButtonProps {}

export const SpotlightButton: FC<SpotlightButtonProps> = ({}) => {
  const { t: tr } = useTranslation();

  const actions: SpotlightActionData[] = [
    {
      id: 'home',
      label: tr('Home'),
      description: tr('Get to home page'),
      onClick: () => console.log('Home'),
      leftSection: <IconHome size="1.2rem" />,
    },
    {
      id: 'dashboard',
      label: tr('Dashboard'),
      description: tr('Get full information about current system status'),
      onClick: () => console.log('Dashboard'),
      leftSection: <IconDashboard size="1.2rem" />,
    },
    {
      id: 'documentation',
      label: tr('Documentation'),
      description: tr('Visit documentation to lean more about all features'),
      onClick: () => console.log('Documentation'),
      leftSection: <IconFileText size="1.2rem" />,
    },
  ];

  return (
    <>
      <ActionIcon onClick={() => spotlight.open()}>
        <IconSearch size="1.2rem" />
      </ActionIcon>

      <Spotlight
        actions={actions}
        nothingFound={tr('Nothing found...')}
        highlightQuery
        searchProps={{
          leftSection: (
            <IconSearch
              style={{ width: rem(20), height: rem(20) }}
              stroke={1.5}
            />
          ),
          placeholder: tr('Search...'),
        }}
      />
    </>
  );
};
