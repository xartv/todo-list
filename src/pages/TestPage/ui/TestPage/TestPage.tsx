import { useState } from 'react';

import { Page } from 'widgets/Page';

import { Button } from 'shared/ui/Button';

import { FramerMotion } from '../FramerMotion/FramerMotion';

import s from './TestPage.module.scss';

const TestPage = () => {
  const [showAnimationPage, setShowAnimationPage] = useState(false);

  return (
    <Page dataTestid="TestPage">
      {showAnimationPage && <FramerMotion />}

      <Button className={s.button} onClick={() => setShowAnimationPage(prev => !prev)}>
        {'Framer motion'}
      </Button>
    </Page>
  );
};

export default TestPage;
