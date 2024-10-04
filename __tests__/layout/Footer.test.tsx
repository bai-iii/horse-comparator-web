import { render, screen } from '@testing-library/react';
import Footer from '@/layout/Footer';

describe('Header Component', () => {
  it('should render the footer with current year', () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);

    const footerText = screen.getByText(`Horse Comparator &copy; ${currentYear}`);
    expect(footerText).toBeInTheDocument();
  });
});
