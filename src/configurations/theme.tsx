import {
  createTheme,
  AppShellHeader,
  AppShellNavbar,
  Button,
  ActionIcon,
  TextInput,
  Textarea,
  Select,
  Card,
  AppShellFooter,
} from '@mantine/core';

export const theme = createTheme({
  primaryShade: { light: 6, dark: 7 },
  primaryColor: 'gray',
  components: {
    AppShellHeader: AppShellHeader.extend({
      defaultProps: {
        classNames: {
          header:
            'border-b border-neutral-700 bg-black flex justify-start items-center px-10 gap-5',
        },
      },
    }),
    AppShellNavbar: AppShellNavbar.extend({
      defaultProps: {
        classNames: {
          navbar: 'border-r border-neutral-700 bg-black',
        },
      },
    }),
    AppShellFooter: AppShellFooter.extend({
      defaultProps: {
        classNames: {
          footer:
            'border-t border-neutral-700 bg-black flex justify-start items-center px-10 gap-2',
        },
      },
    }),
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
        classNames: {
          input: 'bg-black',
        },
        variant: 'filled',
      },
    }),
    Textarea: Textarea.extend({
      defaultProps: {
        classNames: {
          input: 'bg-black',
        },
        variant: 'filled',
        autosize: true,
        minRows: 3,
      },
    }),
    Select: Select.extend({
      defaultProps: {
        classNames: {
          input: 'bg-black',
          dropdown: 'bg-black',
        },
      },
    }),
    Card: Card.extend({
      defaultProps: {
        withBorder: true,
        bg: 'dark.8',
      },
    }),
  },
});
