import Head from 'next/head';
import React from 'react';

const ViewTitlePage: React.FC<{
  titleOfContent: string;
  pageOfTitle: string;
}> = ({ titleOfContent, pageOfTitle }) => {
  return (
    <>
      <Head>
        <title>Sinau NextJS | {pageOfTitle} </title>
      </Head>
      <div>{titleOfContent}</div>
    </>
  );
};

export default ViewTitlePage;
