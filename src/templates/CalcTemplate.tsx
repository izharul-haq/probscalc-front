import React from 'react';
import Meta from '~/components/common/Meta';
import MainTemplate from './MainTemplate';

interface Props {
  title: string;
}

const CalcTemplate: React.FC<Props> = (props) => {
  return (
    <MainTemplate
      meta={<Meta title={`${props.title} | Probability Calculator`} />}
    >
      <div className="w-full min-h-screen px-3 py-20 flex bg-gray-100 justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="mb-4 font-bold text-3xl text-blue-700 uppercase">
            {props.title}
          </div>
          {props.children}
        </div>
      </div>
    </MainTemplate>
  );
};

export default CalcTemplate;
