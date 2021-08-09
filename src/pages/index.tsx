import React from 'react';
import Meta from '~/components/common/Meta';
import MainTemplate from '~/templates/MainTemplate';

const IndexPage: React.FC = () => {
  return (
    <MainTemplate meta={<Meta title="Probability Calculator" />}>
      <div className="w-full min-h-screen px-3 py-20 flex bg-gray-100 justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <div className="bg-blue-500 rounded-md text-gray-100 text-center p-3">
            <p className="font-semibold text-4xl mb-2">Welcome to Probs;Calc</p>
            <p className="text-lg">
              Please choose your distribution type in navigation bar above.
            </p>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default IndexPage;
