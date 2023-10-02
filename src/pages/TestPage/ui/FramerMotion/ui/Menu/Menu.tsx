import { useState } from 'react';

import { MenuItem } from './MenuItem/MenuItem';

import s from './Menu.module.scss';

const menuData = ['Short', 'Very Looooooong item', 'Normal item'];

export const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={s.root}>
      {menuData.map((item, index) => (
        <MenuItem key={item} item={item} isSelected={activeIndex === index} handleClick={() => setActiveIndex(index)} />
      ))}
    </div>
  );
};
