import { useState } from 'react';

import { Button } from 'shared/ui/Button';

import { Basic } from './ui/Basic/Basic';
import { Dragndrop } from './ui/Dragndrop/Dragndrop';
import { Fading } from './ui/Fading/Fading';
import { Menu } from './ui/Menu/Menu';
import { Scroll } from './ui/Scroll/Scroll';

import s from './FramerMotion.module.scss';

type Screens = 'basic' | 'fading' | 'menu' | 'scroll' | 'dragndrop';

export const FramerMotion = () => {
  const [showAnimationPage, setShowAnimationPage] = useState<Screens>('basic');

  const isBasic = showAnimationPage === 'basic';
  const isFading = showAnimationPage === 'fading';
  const isMenu = showAnimationPage === 'menu';
  const isScroll = showAnimationPage === 'scroll';
  const isDragndrop = showAnimationPage === 'dragndrop';

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
        <Button className={s.button} onClick={() => setShowAnimationPage('scroll')}>
          {'Scroll'}
        </Button>
        <Button className={s.button} onClick={() => setShowAnimationPage('dragndrop')}>
          {"Drag'n'drop"}
        </Button>
      </div>

      {isBasic && <Basic />}
      {isFading && <Fading />}
      {isMenu && <Menu />}
      {isScroll && <Scroll />}
      {isDragndrop && <Dragndrop />}
    </div>
  );
};
