import { motion } from 'framer-motion';

import s from './FramerMotion.module.scss';

export const FramerMotion = () => {
  const pVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const liVariants = {
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.5,
      },
    }),
    hidden: {
      opacity: 0,
      y: 100,
    },
  };

  const items = ['Text 1', 'Text 2', 'Text 3', 'Text 4'];

  return (
    <div className={s.root}>
      <motion.div
        className={s.square}
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', type: 'tween' }}
      />

      <motion.p variants={pVariants} initial="hidden" animate="visible">
        {'Text for animate'}
      </motion.p>

      <motion.div className={s.hoverCircle} whileHover={{ scale: 1.2 }}>
        {'Hover me'}
      </motion.div>

      <motion.ul>
        {items.map((item, index) => (
          <motion.li variants={liVariants} initial="hidden" animate="visible" custom={index} key={item}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
