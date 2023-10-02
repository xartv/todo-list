import { motion } from 'framer-motion';

import s from './ActiveLine.module.scss';

export const ActiveLine = () => {
  return <motion.div layoutId="activeItem" className={s.root} />;
};
