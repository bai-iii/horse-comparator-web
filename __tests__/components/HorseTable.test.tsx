import { render, screen } from '@testing-library/react';
import HorseTable from '@/components/HorseTable';
import { Horse } from '@/types';

jest.mock('@chakra-ui/icons', () => ({
  EditIcon: () => <div data-testid="edit-icon" />,
}));

jest.mock('@/components/HorseDetailsCollapse', () => {
  function MockHorseDetailsCollapse({ horse }: { horse: Horse }) {
    return <div data-testid={`horse-details-${horse.id}`}>{horse.name}</div>;
  }

  return MockHorseDetailsCollapse;
});

describe('HorseTable Component', () => {
  const mockHorses: Horse[] = [
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

  it('should show horse table with checkbox, name and edit icon', () => {
    render(<HorseTable horses={mockHorses} />);
    expect(screen.getByText('mockHorse')).toBeInTheDocument();

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes.length).toBe(mockHorses.length);

    const editIcons = screen.getAllByTestId('edit-icon');
    expect(editIcons.length).toBe(mockHorses.length);
  });
});
