import Head from 'next/head';
import { Heading, Text } from '@chakra-ui/layout';
import HorseList from '@/components/HorseList';
import AddHorse from '@/components/AddHorse';
import { VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Horse Comparator</title>
        <meta name="description" content="The world’s premier site for comparing horses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack mx="auto" maxW={{ base: '100%', md: '50%' }} alignItems="flex-start" gap={4}>
        <Text as="i">Welcome back, Jane Doe</Text>
        <Heading as="h1" fontSize={{ base: 'md', md: 'xl' }}>
          Manage and Compare Horses for Your Need!
        </Heading>
        <AddHorse />
        <HorseList />
      </VStack>
    </>
  );
}
