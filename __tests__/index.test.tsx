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
  it('should render the HorseList component', () => {
    render(<Home />);

    const horseList = screen.getByTestId('horse-list');
    expect(horseList).toBeInTheDocument();
  });
});
