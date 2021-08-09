import React from 'react';
import Poisson from '~/components/input/PoissonProbs';
import CalcTemplate from '~/templates/CalcTemplate';

const PoissonPage: React.FC = () => {
  return (
    <CalcTemplate title="Poisson">
      <Poisson />
    </CalcTemplate>
  );
};

export default PoissonPage;
