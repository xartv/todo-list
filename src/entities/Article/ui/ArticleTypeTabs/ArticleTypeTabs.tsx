import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleType } from 'entities/Article';

import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChange: (newTab: TabItem) => void;
}

export const ArticleTypeTabs = ({ className, onChange, value }: ArticleTypeTabsProps) => {
  const { t } = useTranslation();

  const handleTabClick = useCallback(
    (newTab: TabItem) => {
      onChange(newTab);
    },
    [onChange],
  );

  const typeTabs = useMemo<TabItem[]>(
    () => [
      { value: ArticleType.ALL, content: t('articles.filters.all') },
      { value: ArticleType.FINANCE, content: t('articles.filters.finance') },
      { value: ArticleType.IT, content: t('articles.filters.it') },
      { value: ArticleType.POLITICS, content: t('articles.filters.politics') },
      { value: ArticleType.SCIENCE, content: t('articles.filters.science') },
    ],
    [t],
  );

  return <Tabs tabs={typeTabs} value={value} onTabClick={handleTabClick} className={className} />;
};
