import { render, screen } from '@testing-library/react';
import HorseList from '@/components/HorseList';
import { useQuery } from '@tanstack/react-query';
import { Horse } from '@/types';

jest.mock('@/services/request', () => ({
  getHorses: jest.fn(),
}));

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

jest.mock('@chakra-ui/icons', () => ({
  EditIcon: () => <div data-testid="edit-icon" />,
}));

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

  it('should show horse list when successfully fetched', () => {
    const mockData: Horse[] = [
      {
        id: 'mockID',
        name: 'mockHorse',
        profile: {
          favouriteFood: 'Chips',
          physical: {
            height: 200,
            weight: 200,
          },
        },
      },
    ];

    (useQuery as jest.Mock).mockReturnValue({
      isPending: false,
      isError: false,
      data: mockData,
      error: null,
    });
    render(<HorseList />);

    expect(screen.getByText('mockHorse')).toBeInTheDocument();

    expect(screen.getAllByRole('checkbox')).toHaveLength(1);

    expect(screen.getAllByTestId('edit-icon')).toHaveLength(1);
  });
});
