import { useState, useRef, useEffect } from 'react';
import { flushSync } from 'react-dom';

import {
  Textarea,
  TextareaProps,
  Group,
  Stack,
  Menu,
  ActionIcon,
} from '@mantine/core';
import { IconMenu2 } from '@tabler/icons-react';

import { GenerateButton } from './GenerateButton';
import { RecordButton } from './RecordButton';

interface TextInputWithLLMProps extends TextareaProps {
  systemPrompt: string;
  userPrompt: string;
  onValueChange?: (value: string) => void;
}

export const TextareaWithLLM = (props: TextInputWithLLMProps) => {
  const { systemPrompt, userPrompt, value, onValueChange, ...rest } = props;

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [localValue, setLocalValue] = useState<string>('');

  useEffect(() => {
    if (value && value !== localValue) {
      setLocalValue(`${value}`);
    }
  }, [value]);

  useEffect(() => {
    if (onValueChange) {
      onValueChange(localValue);
    }
  }, [localValue]);

  return (
    <Stack className="h-full relative">
      <Group
        className={
          rest.label
            ? 'absolute z-50 right-2 top-8'
            : 'absolute z-50 right-2 top-2'
        }
      >
        <div className="flex-1" />
        <Menu position="bottom-end">
          <Menu.Target>
            <ActionIcon>
              <IconMenu2 size={18} />
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Menu</Menu.Label>
            {/* <Menu.Item>Settings</Menu.Item> */}
            <Stack>
              <GenerateButton
                model="gpt-3.5-turbo-16k"
                systemPrompt={systemPrompt}
                userPrompt={userPrompt}
                onCallback={(token) => {
                  flushSync(() => {
                    setLocalValue((prev) => `${prev}${token}`);
                  });

                  textareaRef.current?.scrollTo({
                    top: textareaRef.current.scrollHeight,
                    behavior: 'smooth',
                  });
                }}
              />

              <RecordButton
                onCallback={(text) => {
                  flushSync(() => {
                    setLocalValue((prev) => `${prev}${text}`);
                  });

                  textareaRef.current?.scrollTo({
                    top: textareaRef.current.scrollHeight,
                    behavior: 'smooth',
                  });
                }}
              />
            </Stack>
          </Menu.Dropdown>
        </Menu>

        {/* <GenerateButton
          model="gpt-3.5-turbo-16k"
          systemPrompt={systemPrompt}
          userPrompt={userPrompt}
          onCallback={(token) => {
            flushSync(() => {
              setLocalValue((prev) => `${prev}${token}`);
            });

            textareaRef.current?.scrollTo({
              top: textareaRef.current.scrollHeight,
              behavior: 'smooth',
            });
          }}
        /> */}
        {/* <RecordButton
          onCallback={(text) => {
            flushSync(() => {
              setLocalValue((prev) => `${prev}${text}`);
            });

            textareaRef.current?.scrollTo({
              top: textareaRef.current.scrollHeight,
              behavior: 'smooth',
            });
          }}
        /> */}
      </Group>

      <Textarea
        ref={textareaRef}
        {...rest}
        value={localValue}
        onChange={(e) => {
          setLocalValue(e.currentTarget.value);
        }}
      />
    </Stack>
  );
};
