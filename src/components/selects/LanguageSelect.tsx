import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from '@mantine/core';

import { languages } from '@/utils/i18n';

export interface LanguageSelectProps {}

export const LanguageSelect: FC<LanguageSelectProps> = ({}) => {
  const { t: tr, i18n } = useTranslation();

  return (
    <Select
      label={tr('Language')}
      data={languages}
      value={i18n.language}
      onChange={(value) => i18n.changeLanguage(value!)}
    />
  );
};
