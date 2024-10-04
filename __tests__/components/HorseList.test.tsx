import { render, screen, fireEvent } from '@testing-library/react';
import HorseList from '@/components/HorseList';
import { useQuery } from '@tanstack/react-query';
import { Horse } from '@/types';

jest.mock('@/services/request', () => ({
  getHorses: jest.fn(),
}));

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

jest.mock('@/components/HorseDetailsCollapse', () => {
  function MockHorseDetailsCollapse({ horse }: { horse: Horse }) {
    return <div data-testid={`horse-details-${horse.id}`}>{horse.name}</div>;
  }

  return MockHorseDetailsCollapse;
});

describe('HorseList Component', () => {
  it('should show "Loading..." when fetch the data', () => {
    (useQuery as jest.Mock).mockReturnValue({
      isPending: true,
      isError: false,
      data: null,
    });
    render(<HorseList />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should show error message when request fails', () => {
    (useQuery as jest.Mock).mockReturnValue({
      isPending: false,
      isError: true,
      data: null,
      error: { message: 'Failed to fetch data' },
    });
    render(<HorseList />);

    expect(screen.getByText('Error: Failed to fetch data')).toBeInTheDocument();
  });

  const mockHorses = Array.from({ length: 15 }, (_, i) => ({
    id: `${i + 1}`,
    name: `Horse ${i + 1}`,
  }));

  it('renders horse data with pagination', async () => {
    (useQuery as jest.Mock).mockReturnValue({
      isPending: false,
      isError: false,
      data: mockHorses,
      error: null,
    });

    render(<HorseList />);

    // display 10 on first page
    for (let i = 1; i <= 10; i++) {
      expect(screen.getByText(`Horse ${i}`)).toBeInTheDocument();
    }

    // 11 should be on second page
    expect(screen.queryByText('Horse 11')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('Next'));

    // display 5 on first page
    for (let i = 11; i <= 15; i++) {
      expect(screen.getByText(`Horse ${i}`)).toBeInTheDocument();
    }

    // 1 should be on second page
    expect(screen.queryByText('Horse 1')).not.toBeInTheDocument();
  });
});
