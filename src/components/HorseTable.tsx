import {
  Checkbox,
  CheckboxGroup,
  Table,
  TableColumnHeaderProps,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { Horse } from '@/types';
import { EditIcon } from '@chakra-ui/icons';
import HorseDetailsCollapse from '@/components/HorseDetailsCollapse';

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

interface HorseTableProps {
  horses: Horse[];
}

const HorseTable = ({ horses }: HorseTableProps) => {
  return (
    <TableContainer overflowY="auto" maxH="54vh">
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
              <Tr key={horse.id} _hover={{ bgColor: 'blackAlpha.50' }}>
                <Td textAlign="center">
                  <Checkbox value={horse.id} />
                </Td>
                <Td w="100%">
                  <HorseDetailsCollapse horse={horse} />
                </Td>
                <Td textAlign="center">
                  <EditIcon role="button" arial-label="Edit Hores" />
                </Td>
              </Tr>
            ))}
          </CheckboxGroup>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default HorseTable;
