import { Card, Text, Badge, Button, Group, Stack } from '@mantine/core';

export const ProjectCard = ({
  // projectId,
  type,
  name,
  description,
  thumbnail,
  onClick,
}: {
  projectId: string;
  type: string;
  name: string;
  description: string;
  thumbnail: string;
  onClick: () => void;
}) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section className="bg-gray-900 h-40">
        <img
          className="w-full h-full object-contain"
          src={thumbnail}
          alt="thumbnail"
        />
      </Card.Section>

      <Stack className="mt-5">
        <Group>
          <Text weight={500}>{name}</Text>

          <Badge color="red" variant="light">
            {type}
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          {description}
        </Text>

        <Button variant="light" color="blue" fullWidth onClick={onClick}>
          Go
        </Button>
      </Stack>
    </Card>
  );
};
