import { useState } from 'react';

import { Button } from '@mantine/core';

import { ChatOpenAI } from 'langchain/chat_models/openai';
import { SystemChatMessage, HumanChatMessage } from 'langchain/schema';

export const GenerateButton = ({
  model,
  systemPrompt,
  userPrompt,
  onCallback,
}: {
  model: 'gpt-3.5-turbo' | 'gpt-3.5-turbo-16k' | 'gpt-4';
  systemPrompt: string;
  userPrompt: string;
  onCallback: (token: string) => void;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const onGenerate = async () => {
    const openaiApiKey = window.localStorage.getItem('openaiApiKey') || '';

    // define a new llm
    const llm = new ChatOpenAI({
      temperature: 0,
      openAIApiKey: openaiApiKey,
      modelName: model,
      streaming: true,
    });

    setLoading(true);

    // call llm
    await llm.call(
      [new SystemChatMessage(systemPrompt), new HumanChatMessage(userPrompt)],
      undefined,
      [
        {
          handleLLMNewToken(token: string) {
            onCallback(token);
          },
        },
      ],
    );

    setLoading(false);
  };

  return (
    <Button variant="light" size="xs" onClick={onGenerate} loading={loading}>
      Generate
    </Button>
  );
};
