import { useState } from 'react';

import { Page } from 'widgets/Page';

import { Button } from 'shared/ui/Button';

import { FramerMotion } from '../FramerMotion/FramerMotion';

import s from './TestPage.module.scss';

const TestPage = () => {
  const [showAnimationPage, setShowAnimationPage] = useState(false);

  return (
    <Page>
      {showAnimationPage && <FramerMotion />}

      <Button className={s.button} onClick={() => setShowAnimationPage(prev => !prev)}>
        {'Animation page'}
      </Button>
    </Page>
  );
};

export default TestPage;
