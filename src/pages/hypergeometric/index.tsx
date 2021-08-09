import React from 'react';
import Hypergeometric from '~/components/input/HyperProbs';
import CalcTemplate from '~/templates/CalcTemplate';

const HyperPage: React.FC = () => {
  return (
    <CalcTemplate title="Hypergeometric">
      <Hypergeometric />
    </CalcTemplate>
  );
};

export default HyperPage;
