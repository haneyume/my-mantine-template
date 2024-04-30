import { FC } from 'react';

import { AppShell, Text, ActionIcon, Group } from '@mantine/core';

import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandDiscord,
} from '@tabler/icons-react';

import { useAppSelector, selectStatusMessage } from '@/app-redux';

export interface AppFooterProps {}

export const AppFooter: FC<AppFooterProps> = ({}) => {
  const statusMessage = useAppSelector(selectStatusMessage);

  const version = import.meta.env.VITE_VERSION as string;
  const githubUrl = import.meta.env.VITE_GITHUB_URL as string;
  const twitterUrl = import.meta.env.VITE_TWITTER_URL as string;
  const discordUrl = import.meta.env.VITE_DISCORD_URL as string;

  return (
    <AppShell.Footer>
      <Text size="sm">{`Status: ${statusMessage}`}</Text>

      <div className="flex-1" />

      <Group gap={2}>
        <ActionIcon
          c="gray.5"
          variant="transparent"
          onClick={() => window.open(githubUrl, '_blank')}
        >
          <IconBrandGithub size={16} />
        </ActionIcon>

        <ActionIcon
          c="gray.5"
          variant="transparent"
          onClick={() => window.open(twitterUrl, '_blank')}
        >
          <IconBrandTwitter size={16} />
        </ActionIcon>

        <ActionIcon
          c="gray.5"
          variant="transparent"
          onClick={() => window.open(discordUrl, '_blank')}
        >
          <IconBrandDiscord size={16} />
        </ActionIcon>
      </Group>

      <Text size="sm">{`Version: ${version}`}</Text>
    </AppShell.Footer>
  );
};
