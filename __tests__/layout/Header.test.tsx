import { render, screen } from '@testing-library/react';
import Header from '@/layout/Header';

describe('Header Component', () => {
  it('should render the header with correct title', () => {
    render(<Header />);

    expect(screen.getByText('Horse Comparator')).toBeInTheDocument();
  });
});
