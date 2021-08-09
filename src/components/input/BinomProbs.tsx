import React from 'react';
import BaseProbs from './BaseProbs';

const Binomial: React.FC = () => {
  const params = [
    {
      name: 'x',
      title: 'Number of success',
    },
    {
      name: 'n',
      title: 'Number of trials',
    },
    {
      name: 'p',
      title: 'Probability of success on each trial',
      max: 1,
    },
  ];

  return <BaseProbs type="binom" params={params} />;
};

export default Binomial;
