import { Footer, Text, ActionIcon } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';

export const AppFooter = () => {
  const VERSION = import.meta.env.VITE_VERSION;
  const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;

  return (
    <Footer height={40}>
      <div className="px-5 h-full flex items-center space-x-2">
        <Text fz="xs">Status: Ready</Text>

        <div className="flex-1"></div>

        <Text fz="xs">Version {VERSION}</Text>

        <ActionIcon onClick={() => window.open(GITHUB_URL)}>
          <IconBrandGithub size="16px" />
        </ActionIcon>
      </div>
    </Footer>
  );
};
