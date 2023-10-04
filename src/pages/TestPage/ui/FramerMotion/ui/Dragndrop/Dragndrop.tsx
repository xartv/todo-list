import { useState } from 'react';
import { Reorder } from 'framer-motion';

export function Dragndrop() {
  const [items, setItems] = useState([0, 1, 2, 3]);

  return (
    <Reorder.Group values={items} onReorder={setItems}>
      {items.map(item => (
        <Reorder.Item key={item} value={item}>
          {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
