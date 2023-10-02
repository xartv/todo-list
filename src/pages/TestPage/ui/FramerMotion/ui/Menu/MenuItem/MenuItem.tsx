import { motion } from 'framer-motion';

import { ActiveLine } from '../ActiveLine/ActiveLine';

import s from './MenuItem.module.scss';

interface MenuItemProps {
  item: string;
  isSelected: boolean;
  handleClick: () => void;
}

export const MenuItem = ({ item, isSelected, handleClick }: MenuItemProps) => {
  return (
    <motion.div
      className={s.root}
      onClick={() => handleClick()}
      initial={{ color: '#000' }}
      animate={{ color: isSelected ? 'rgb(255, 0, 0)' : '#000' }}
    >
      {item}
      {isSelected && <ActiveLine />}
    </motion.div>
  );
};
