import Head from 'next/head';
import { GetStaticProps } from 'next';

import MainBanner from '@/components/HomeBanner';
import MovieList from '@/components/MovieList';
import MainLayout from '@/layouts/MainLayout';
import { getNowPlayingMovies } from '@/services';

import type { Movie } from '@/types';
import { imageURL } from '@/constants';

type HomeProps = { allMovies: Movie[] };

export default function Home({ allMovies }: HomeProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Streaming service web practice" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout title="Home">
        <MainBanner movie={allMovies[0]} />
        <MovieList data={allMovies} />
      </MainLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allMovies: Movie[] = await getNowPlayingMovies();
  return {
    props: {
      allMovies,
    },
  };
};
