import { ReactNode } from 'react';

import { Accordion, Stack } from '@mantine/core';

export const PropertySection = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => {
  return (
    <Accordion.Item value={label}>
      <Accordion.Control className="bg-neutral-800">{label}</Accordion.Control>
      <Accordion.Panel>
        <Stack>{children}</Stack>
      </Accordion.Panel>
    </Accordion.Item>
  );
};
