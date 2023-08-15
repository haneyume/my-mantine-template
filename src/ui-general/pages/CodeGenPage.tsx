import { Stack } from '@mantine/core';

import { TextareaWithLLM } from '@/ui-shared/buttons/TextareaWithLLM';

export const CodeGenPage = () => {
  return (
    <Stack>
      <TextareaWithLLM
        label="Test"
        minRows={10}
        autosize
        systemPrompt=""
        userPrompt=""
      />
    </Stack>
  );
};
