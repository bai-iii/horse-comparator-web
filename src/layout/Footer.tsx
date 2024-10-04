import { Box, Flex, Text } from '@chakra-ui/layout';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box as="footer" h={8} px={8} py={2}>
      <Flex justifyContent="center" alignItems="center">
        <Text fontSize="sm">Horse Comparator &copy; {year}</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
