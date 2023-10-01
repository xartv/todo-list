import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import cn from 'classnames';

import s from './Filter.module.scss';

interface FilterProps {
  className?: string;
}

type Category = 'cars' | 'fruits' | 'animals';

const data = [
  {
    category: 'cars',
    title: 'BMW',
  },
  {
    category: 'cars',
    title: 'Volvo',
  },
  {
    category: 'cars',
    title: 'Mustang',
  },
  {
    category: 'fruits',
    title: 'Melon',
  },
  {
    category: 'animals',
    title: 'Kitty',
  },
  {
    category: 'animals',
    title: 'Dog',
  },
];

export const Filter = ({ className }: FilterProps) => {
  const [cards, setCards] = useState(data);

  const categories = [...new Set(data.map(item => item.category))];

  const handleFilter = (categoty: Category) => {
    setCards(data.filter(item => item.category === categoty));
  };

  return (
    <div className={cn(s.root, className)}>
      <div className={s.filtersWrapper}>
        {categories.map(category => (
          <motion.button
            key={category}
            onClick={() => handleFilter(category as Category)}
            whileHover={{ backgroundColor: 'blue', color: 'white' }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <div className={s.dataWrapper}>
        <AnimatePresence mode="wait">
          {cards.map(card => (
            <motion.div key={card.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {card.title}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
