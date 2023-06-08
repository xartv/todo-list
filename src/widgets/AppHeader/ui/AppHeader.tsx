import { Link } from 'react-router-dom';

import s from './AppHeader.module.scss';

export const AppHeader = () => {
  return (
    <ul className={s.root}>
      <li className={s.tab}>
        <Link to="/todos">Todos</Link>
      </li>
      <li className={s.tab}>
        <Link to="/test">Test Page</Link>
      </li>
    </ul>
  );
};
