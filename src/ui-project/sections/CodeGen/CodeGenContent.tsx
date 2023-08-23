import { TextareaWithLLM } from '@/ui-shared/buttons/TextareaWithLLM';

export const CodeGenContent = () => {
  return (
    <div>
      <TextareaWithLLM
        label="Test"
        minRows={10}
        autosize
        systemPrompt=""
        userPrompt=""
      />
    </div>
  );
};
