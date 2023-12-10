import {
  createTheme,
  Button,
  ActionIcon,
  TextInput,
  Textarea,
} from '@mantine/core';

export const theme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        variant: 'light',
      },
    }),
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        variant: 'default',
      },
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        variant: 'filled',
      },
    }),
    Textarea: Textarea.extend({
      defaultProps: {
        variant: 'filled',
        autosize: true,
        minRows: 3,
      },
    }),
  },
});
