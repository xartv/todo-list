import { fireEvent, screen } from '@testing-library/react';

import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslations/renderWithTranslations';

import { Sidebar } from './Sidebar';

describe('test sidebar', () => {
  test('render', () => {
    renderWithTranslations(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('collapse', () => {
    renderWithTranslations(<Sidebar />);
    const toggleBtn = screen.getByTestId('toggle-collapse');
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(sidebar.getAttribute('class')).toMatch(/collapsed/gi);
  });
});
