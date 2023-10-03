import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import s from './Block.module.scss';

// eslint-disable-next-line
export const Block = forwardRef((_, ref: any) => {
  return <div ref={ref} className={s.root} />;
});

export const MBlock = motion(Block);
