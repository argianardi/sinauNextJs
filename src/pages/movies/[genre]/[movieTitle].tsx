import { useRouter } from 'next/router';
import React from 'react';

const DetailMovie = () => {
  const router = useRouter();
  const movieTitle: string = router.query.movieTitle as string;
  console.log(router.query);

  return <div>Detail Movie of {movieTitle.split('-').join(' ')}</div>;
};

export default DetailMovie;
