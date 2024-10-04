import { getHorses } from '@/services/request';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import HorseTable from '@/components/HorseTable';
import Pagination from '@/components/Pagination';

const HorseList = () => {
  // fetch horse data
  const {
    isPending,
    isError,
    data: horses = [],
    error,
  } = useQuery({
    queryKey: ['horses'],
    queryFn: () => getHorses(),
  });

  // pagination status
  const [currentPage, setCurrentPage] = useState<number>(1);

  // TODO: show a skeleton list for better experience
  if (isPending) {
    return <span>Loading...</span>;
  }

  // TODO: show error message toast for better experience
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const HORSE_PER_PAGE = 10;
  const totalPages = Math.ceil(horses.length / HORSE_PER_PAGE);
  const startIndex = (currentPage - 1) * HORSE_PER_PAGE;
  const displayedHorses = horses.slice(startIndex, startIndex + HORSE_PER_PAGE);

  return (
    <>
      <HorseTable horses={displayedHorses} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </>
  );
};

export default HorseList;
