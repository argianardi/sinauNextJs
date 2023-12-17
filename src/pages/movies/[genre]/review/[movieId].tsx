import { useRouter } from 'next/router';
import React from 'react';

const MovieId = () => {
  const movieId: number = Number(useRouter().query.movieId) as number;
  return (
    <div>
      <h1>Review Movie dengan id: {movieId} </h1>
    </div>
  );
};

export default MovieId;
