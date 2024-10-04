import Head from 'next/head';
import HorseList from '@/components/HorseList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Horse Comparator</title>
        <meta name="description" content="The world’s premier site for comparing horses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HorseList />
    </>
  );
}
