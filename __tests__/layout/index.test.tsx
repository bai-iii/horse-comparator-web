import { render, screen } from '@testing-library/react';
import Layout from '@/layout';

jest.mock('@/layout/Header', () => {
  function MockHeader() {
    return <div data-testid="header">Mock Header</div>;
  }
  return MockHeader;
});

jest.mock('@/layout/Footer', () => {
  function MockFooter() {
    return <div data-testid="footer">Mock Footer</div>;
  }
  return MockFooter;
});

describe('Layout Component', () => {
  it('should render Header, Footer, and main section', () => {
    render(
      <Layout>
        <div>Child component</div>
      </Layout>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();

    expect(screen.getByTestId('footer')).toBeInTheDocument();

    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });
});
