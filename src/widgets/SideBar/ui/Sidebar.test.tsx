import { fireEvent, screen } from '@testing-library/react';

import { withRender } from 'shared/lib/tests/withRender';

import { Sidebar } from './Sidebar';

describe('test sidebar', () => {
  test('render', () => {
    withRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('collapse', () => {
    withRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('toggle-collapse');
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
    expect(sidebar.getAttribute('class')).toMatch(/collapsed/gi);
    fireEvent.click(toggleBtn);
    expect(sidebar.getAttribute('class')).not.toMatch(/collapsed/gi);
  });
});
