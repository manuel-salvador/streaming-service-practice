import { imageURL } from '@/constants';
import { Movie } from '@/types';
import React from 'react';

type HomeBannerProps = {
  movie: Movie;
};

export default function HomeBanner({ movie }: HomeBannerProps) {
  return (
    <section className="w-full h-[500px] relative">
      <div className="z-10 relative w-1/2 h-full flex flex-col gap-8 justify-end pl-10 pb-10">
        <p className="text-4xl font-bold">{movie.title}</p>
        <p className="text-lg font-medium">{movie.overview}</p>
        <div className="flex gap-8 font-medium">
          <p>Score: {movie.vote_average}</p>
          <p>Year: {movie.release_date.slice(0, 4)}</p>
        </div>
        <div className="flex gap-8">
          <a href="#" className="bg-white text-black py-4 px-8 text-lg font-bold rounded-md">
            {' '}
            ► WATCH NOW
          </a>
          <a href="#" className="bg-black border border-white py-4 px-8 font-bold rounded-md">
            TRAILER
          </a>
        </div>
      </div>
      <img
        src={`${imageURL}${movie.backdrop_path}`}
        alt={`${movie.title} banner`}
        className="w-full h-full top-0 left-0 absolute z-0 object-cover"
      />
      <div className="absolute bottom-0 h-full w-full bg-gradient-to-b from-transparent to-black opacity-90"></div>
    </section>
  );
}
