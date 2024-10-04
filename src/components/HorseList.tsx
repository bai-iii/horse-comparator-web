import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Tbody,
  Th,
  TableColumnHeaderProps,
  CheckboxGroup,
  Checkbox,
  Text,
  Td,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getHorses } from '@/services/request';
import { EditIcon } from '@chakra-ui/icons';
import { Horse } from '@/types';

interface HeaderCellProps {
  label: string;
}

const HeaderCell = ({ label, ...columnProps }: HeaderCellProps & TableColumnHeaderProps) => {
  return (
    <Th position="sticky" top={0} zIndex={2} backgroundColor="#FFF" {...columnProps}>
      {label}
    </Th>
  );
};

const HorseList = () => {
  // fetch horse data
  const {
    isPending,
    isError,
    data: horses,
    error,
  } = useQuery({
    queryKey: ['horses'],
    queryFn: () => getHorses(),
  });

  // TODO: show a skeleton list for better experience
  if (isPending) {
    return <span>Loading...</span>;
  }

  // TODO: show error message toast for better experience
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <TableContainer overflowY="auto">
      <Table variant="simple" size={['sm', 'md']} layout={['auto', 'fixed']}>
        <Thead>
          <Tr>
            <HeaderCell label="Select" textAlign="center" w="100px" />
            <HeaderCell label="Name" />
            <HeaderCell label="Edit" textAlign="center" w="100px" />
          </Tr>
        </Thead>
        <Tbody>
          <CheckboxGroup>
            {horses.map((horse: Horse) => (
              <Tr key={horse.id}>
                <Td textAlign="center">
                  <Checkbox value={horse.id} />
                </Td>
                <Td w="100%">
                  <Text noOfLines={1}>{horse.name}</Text>
                </Td>
                <Td textAlign="center">
                  <EditIcon />
                </Td>
              </Tr>
            ))}
          </CheckboxGroup>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default HorseList;
