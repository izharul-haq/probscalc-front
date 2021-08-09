import React from 'react';
import Head from 'next/head';

interface Props {
  title: string;
}

const Meta: React.FC<Props> = ({ title }: Props) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html" />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
