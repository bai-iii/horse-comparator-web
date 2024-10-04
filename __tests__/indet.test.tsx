import { render, screen } from '@testing-library/react';
import Home from '@/pages';

jest.mock('@/components/HorseList', () => {
  function MockHorseList() {
    return <div data-testid="horse-list">Mock Horse List</div>;
  }
  return MockHorseList;
});

describe('Home Page', () => {
  it('should render the HorseList component', () => {
    render(<Home />);

    const horseList = screen.getByTestId('horse-list');
    expect(horseList).toBeInTheDocument();
  });
});
