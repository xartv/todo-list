import { ReactNode, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Button } from 'shared/ui/Button';

import s from './Collapsable.module.scss';

interface CollapsableProps {
  title?: string;
  children: ReactNode;
}

export const Collapsable = ({ title = 'Click me', children }: CollapsableProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleVisibility = () => setIsVisible(prev => !prev);

  return (
    <div className={s.root}>
      <Button onClick={handleVisibility}>{title}</Button>

      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0 }}
            style={{ overflow: 'hidden' }}
            transition={{ duration: 1 }}
          >
            <div className={s.wrapper}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
