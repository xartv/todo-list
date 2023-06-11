import { Link } from 'react-router-dom';

import s from './AppHeader.module.scss';

export const AppHeader = () => {
  return (
    <div className={s.root}>
      <Link to="/todos">Todos</Link>
      <Link to="/test">Test Page</Link>
    </div>
  );
};
