import { Box, Flex, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box as="header" h={16} px={8} py={2} boxShadow="md" position="relative" zIndex={99}>
      <Flex justifyContent="space-between" alignItems="center" h="100%">
        <Text fontWeight={600} fontSize="xl">
          Horse Comparator
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;
