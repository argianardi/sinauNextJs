import Link from 'next/link';
import { type } from 'os';
import React from 'react';

type Movie = {
  id: number;
  title: string;
  genre: string;
};

const movies: Movie[] = [
  { id: 1, title: 'The Shawshank Redemption', genre: 'Drama' },
  { id: 2, title: 'The Godfather', genre: 'Crime' },
  { id: 3, title: 'The Dark Knight', genre: 'Action' },
];
const MoviesIndex = () => {
  const uniqueGenres = Array.from(new Set(movies.map((movie) => movie.genre)));
  return (
    <div>
      <h1>All Movie Genres</h1>
      <ul>
        {uniqueGenres?.map((genre) => (
          <li>
            <Link href={`/movies/${genre.toLowerCase()}`}>{genre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesIndex;
