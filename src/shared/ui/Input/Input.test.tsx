import { render, screen } from '@testing-library/react';

import { Input } from './Input';

describe('testButton', () => {
  test('button render', () => {
    render(<Input title="Test" value="test" onChange={() => {}} />);
    expect(screen.getByTestId('input-title')).toBeInTheDocument();
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });
});
