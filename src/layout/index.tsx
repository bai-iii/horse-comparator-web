import { Box } from '@chakra-ui/layout';
import { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Box as="main" p={8} h="calc(100vh - 96px)" overflowY="auto">
        <Box mx="auto" maxW="1920px">
          {children}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
