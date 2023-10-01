import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { Text } from 'shared/ui/Text/Text';

import { Collapsable } from './Collapsable/Collapsable';
import { Filter } from './Filter/Filter';

import s from './Fading.module.scss';

interface FadingProps {
  className?: string;
}

export const Fading = ({ className }: FadingProps) => {
  const { t } = useTranslation();

  return (
    <div className={cn(s.root, className)}>
      <Collapsable>
        <div>
          <Text description={t('lorem')} />
          <Text description={t('lorem')} />
          <Text description={t('lorem')} />
        </div>
      </Collapsable>

      <Filter />
    </div>
  );
};
