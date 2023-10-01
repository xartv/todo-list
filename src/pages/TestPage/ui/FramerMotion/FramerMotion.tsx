import { useState } from 'react';

import { Button } from 'shared/ui/Button';

import { Basic } from './ui/Basic/Basic';
import { Fading } from './ui/Fading/Fading';

import s from './FramerMotion.module.scss';

type Screens = 'basic' | 'fading';

export const FramerMotion = () => {
  const [showAnimationPage, setShowAnimationPage] = useState<Screens>('basic');

  const isBasic = showAnimationPage === 'basic';
  const isFading = showAnimationPage === 'fading';

  return (
    <div className={s.root}>
      <div className={s.controls}>
        <Button className={s.button} onClick={() => setShowAnimationPage('basic')}>
          {'Basic'}
        </Button>
        <Button className={s.button} onClick={() => setShowAnimationPage('fading')}>
          {'Fading'}
        </Button>
      </div>

      {isBasic && <Basic />}
      {isFading && <Fading />}
    </div>
  );
};
