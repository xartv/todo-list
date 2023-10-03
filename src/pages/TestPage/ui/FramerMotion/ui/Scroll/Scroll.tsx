import { motion } from 'framer-motion';

import { MBlock } from './Block/Block';

import s from './Scroll.module.scss';

const blockAnimation = {
  hidden: (index: number) => ({
    x: index % 2 === 0 ? -100 : 100,
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const Scroll = () => {
  return (
    <motion.div className={s.root}>
      {new Array(20).fill(null).map((_, index) => (
        <MBlock
          key={index}
          viewport={{ amount: 0.9 }}
          initial="hidden"
          whileInView="visible"
          variants={blockAnimation}
          custom={index}
        />
      ))}
    </motion.div>
  );
};
