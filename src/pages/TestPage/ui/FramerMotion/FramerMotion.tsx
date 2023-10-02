import { useState } from 'react';

import { Button } from 'shared/ui/Button';

import { Basic } from './ui/Basic/Basic';
import { Fading } from './ui/Fading/Fading';
import { Menu } from './ui/Menu/Menu';

import s from './FramerMotion.module.scss';

type Screens = 'basic' | 'fading' | 'menu';

export const FramerMotion = () => {
  const [showAnimationPage, setShowAnimationPage] = useState<Screens>('basic');

  const isBasic = showAnimationPage === 'basic';
  const isFading = showAnimationPage === 'fading';
  const isMenu = showAnimationPage === 'menu';

  return (
    <div className={s.root}>
      <div className={s.controls}>
        <Button className={s.button} onClick={() => setShowAnimationPage('basic')}>
          {'Basic'}
        </Button>
        <Button className={s.button} onClick={() => setShowAnimationPage('fading')}>
          {'Fading'}
        </Button>
        <Button className={s.button} onClick={() => setShowAnimationPage('menu')}>
          {'Menu'}
        </Button>
      </div>

      {isBasic && <Basic />}
      {isFading && <Fading />}
      {isMenu && <Menu />}
    </div>
  );
};
