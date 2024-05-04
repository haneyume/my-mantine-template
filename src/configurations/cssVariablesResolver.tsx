import { CSSVariablesResolver } from '@mantine/core';

const cssVariablesResolver: CSSVariablesResolver = (_theme) => ({
  variables: {},
  light: {
    '--mantine-color-body': '#fff',
  },
  dark: {
    '--mantine-color-body': 'var(--mantine-color-dark-9)',
  },
});

export { cssVariablesResolver };
