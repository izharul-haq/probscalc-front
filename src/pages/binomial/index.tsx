import React from 'react';
import Binomial from '~/components/input/BinomProbs';
import CalcTemplate from '~/templates/CalcTemplate';

const BinomPage: React.FC = () => {
  return (
    <CalcTemplate title="Binomial">
      <Binomial />
    </CalcTemplate>
  );
};

export default BinomPage;
