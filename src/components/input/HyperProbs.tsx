import React from 'react';
import BaseProbs from './BaseProbs';

const Hypergeometric: React.FC = () => {
  const params = [
    {
      name: 'x',
      title: 'Number of observed success',
    },
    {
      name: 'n',
      title: 'Number of draws',
    },
    {
      name: 'N',
      title: 'Population size',
    },
    {
      name: 'k',
      title: 'Number of success in the population',
    },
  ];

  return <BaseProbs type="hyper" params={params} />;
};

export default Hypergeometric;
