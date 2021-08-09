import React from 'react';
import Geometric from '~/components/input/GeoProbs';
import CalcTemplate from '~/templates/CalcTemplate';

const GeoPage: React.FC = () => {
  return (
    <CalcTemplate title="Geometric">
      <Geometric />
    </CalcTemplate>
  );
};

export default GeoPage;
