import React from 'react';
import type { Movie } from '@/types';
import { imageURL } from '@/constants';
import Card from './Card';

type MovieListProps = {
  data: Movie[];
};

export default function MovieList({ data: allMovies }: MovieListProps) {
  return (
    <section className="p-12">
      <h2 className="mb-12 text-4xl font-bold text-center">Movies</h2>
      <div className="grid grid-cols-list-cards place-items-center gap-8">
        {allMovies.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
}
