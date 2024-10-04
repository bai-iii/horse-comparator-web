import { HStack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Text } from '@chakra-ui/react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const goToPrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <HStack justifyContent="flex-end" alignItems="center" gap={2}>
      <Button variant="link" size="sm" isDisabled={currentPage === 1} onClick={goToPrev}>
        Prev
      </Button>
      <Text fontSize="sm">
        {currentPage} of {totalPages}
      </Text>
      <Button variant="link" size="sm" isDisabled={currentPage === totalPages} onClick={goToNext}>
        Next
      </Button>
    </HStack>
  );
};

export default Pagination;
