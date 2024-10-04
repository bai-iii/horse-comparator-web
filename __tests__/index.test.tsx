import { render, screen } from '@testing-library/react';
import Home from '@/pages';

jest.mock('@/components/HorseList', () => {
  function MockHorseList() {
    return <div data-testid="horse-list">Mock Horse List</div>;
  }
  return MockHorseList;
});

jest.mock('@/components/AddHorse', () => {
  function MockAddHorse() {
    return <button data-testid="add-horse">Mock Add Horse</button>;
  }
  return MockAddHorse;
});

describe('Home Page', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('should render the welcome message', () => {
    expect(screen.getByText('Welcome back, Jane Doe')).toBeInTheDocument();
  });

  it('should render the AddHorse component', () => {
    expect(screen.getByTestId('add-horse')).toBeInTheDocument();
  });

  it('should render the HorseList component', () => {
    expect(screen.getByTestId('horse-list')).toBeInTheDocument();
  });
});
