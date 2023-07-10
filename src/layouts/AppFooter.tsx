import { Footer, Text, ActionIcon } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';

export const AppFooter = () => {
  return (
    <Footer height={40}>
      <div className="px-5 h-full flex items-center space-x-2">
        <Text fz="xs">Status: Ready</Text>

        <div className="flex-1"></div>

        <Text fz="xs">Version 0.0.0</Text>

        <ActionIcon onClick={() => window.open('https://github.com/')}>
          <IconBrandGithub size="16px" />
        </ActionIcon>
      </div>
    </Footer>
  );
};
