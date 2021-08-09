import React from 'react';
import BaseProbs from './BaseProbs';

const Geometric: React.FC = () => {
  const params = [
    {
      name: 'x',
      title: 'Number of failures',
    },
    {
      name: 'p',
      title: 'Probability of success on each trial',
      max: 1,
    },
  ];

  return <BaseProbs type="geo" params={params} />;
};

export default Geometric;
