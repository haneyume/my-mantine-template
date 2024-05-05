import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Card, Text, Badge, Button, Group, Stack } from '@mantine/core';

import dayjs from 'dayjs';

export interface ProjectCardProps {
  name: string;
  description: string;
  thumbnail: string;
  createdAt: string;
  onClick: () => void;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  name,
  description,
  thumbnail,
  createdAt,
  onClick,
}) => {
  const { t: tr } = useTranslation();

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section className="bg-gray-900 h-40">
        <img
          className="w-full h-full object-cover"
          src={thumbnail}
          alt="thumbnail"
        />
      </Card.Section>

      <Stack className="mt-5">
        <Group>
          <Text className="font-bold">{name}</Text>

          <div className="flex-1" />

          <Badge color="gray">{dayjs().from(dayjs(createdAt))}</Badge>
        </Group>

        <Text size="sm">{description}</Text>

        <Button fullWidth onClick={onClick}>
          {tr('Start')}
        </Button>
      </Stack>
    </Card>
  );
};
