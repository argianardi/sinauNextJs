import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
const staticMoviesData = [
  {
    id: 1,
    title: 'Inception',
  },
  {
    id: 2,
    title: 'The Shawshank Redemption',
  },
  {
    id: 3,
    title: 'Pulp Fiction',
  },
];

const MoviesByGenre = () => {
  const router = useRouter();
  const { genre } = router.query;

  return (
    <div>
      {/* Link to detail movies */}
      <div>
        <h1>Movies by Genre: {genre}</h1>
        <ul>
          {staticMoviesData?.map((movie) => (
            <li key={movie?.id}>
              <Link
                href={`/movies/${genre}/${movie?.title
                  .toLowerCase()
                  .replace(/\s+/g, '-')}`}
              >
                {movie?.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Link to review movies */}
      <div>
        <h1 style={{ marginTop: '30px' }}>Review Movies</h1>
        <ul>
          {staticMoviesData?.map((movie) => (
            <li key={movie?.id}>
              <Link href={`/movies/${genre}/review/${movie?.id}`}>
                {movie?.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoviesByGenre;
