import { render, screen } from '@testing-library/react';

import { Button, ButtonTheme } from './Button';

describe('testButton', () => {
  test('button render', () => {
    render(<Button>HELLO</Button>);
    expect(screen.getByText('HELLO')).toBeInTheDocument();
  });
  test('button className test', () => {
    render(<Button theme={ButtonTheme.CLEAR}>HELLO</Button>);
    expect(screen.getByText('HELLO')).toHaveClass('_clear_0302f3');
  });
});
