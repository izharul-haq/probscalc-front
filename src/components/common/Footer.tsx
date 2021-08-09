import React from 'react';
import { FaCopyright } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <div className="w-full bottom-0 p-4 text-left fixed bg-blue-500">
      <div className="text-gray-100 flex flex-row justify-center items-center">
        <div className="p-1">
          <FaCopyright size="1rem" />
        </div>
        <div className="p-1 text-sm">
          2021, made by <b>Izharulhaq</b>
        </div>
      </div>
    </div>
  );
};

export default Footer;
