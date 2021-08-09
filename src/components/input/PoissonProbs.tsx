import React from 'react';
import BaseProbs from './BaseProbs';

const Poisson: React.FC = () => {
  const params = [
    {
      name: 'x',
      title: 'Number of success',
    },
    {
      name: 'p',
      title: 'Average rate of success',
    },
  ];

  return <BaseProbs type="poisson" params={params} />;
};

export default Poisson;
