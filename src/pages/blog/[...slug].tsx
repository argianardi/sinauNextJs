import { useRouter } from 'next/router';
import React from 'react';

const BlogDetail = () => {
  const router = useRouter();
  const { slug } = router.query as { slug: string[] };
  console.log(slug); //['sports', 'monday', '3 hottest news today']

  return (
    <div>
      <h2 className="text-blue-900">Detail Blog</h2>
      <p>Path Segments: {slug?.join('/')}</p>
    </div>
  );
};

export default BlogDetail;
