import React from 'react';
import type { Movie } from '@/types';
import { imageURLOptimized } from '@/constants';

type CardProps = { movie: Movie };

export default function Card({ movie }: CardProps) {
  return (
    <div
      className={`w-full h-full shadow-lg shadow-slate-900 cursor-pointer rounded-md overflow-hidden transition-all duration-300 border-4 border-transparent hover:border-slate-400  hover:scale-110 hover:shadow-slate-400`}
    >
      <img
        src={`${imageURLOptimized}${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
