import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { BiCalculator } from 'react-icons/bi';
import { TiThMenu } from 'react-icons/ti';

const navbarItems = [
  {
    link: '/binomial',
    name: 'Binomial',
  },
  {
    link: '/geometric',
    name: 'Geometric',
  },
  {
    link: '/hypergeometric',
    name: 'Hypergeometric',
  },
  {
    link: '/poisson',
    name: 'Poisson',
  },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="container z-10 top-0 sticky">
      <div className="bg-blue-500 w-full p-4 fixed">
        <div className="w-full justify-between items-center">
          <div className="flex flex-row justify-between items-center">
            <Link href={'/'} passHref>
              <button className="flex flex-row justify-center md:justify-start items-center text-gray-100 focus:ring-0 focus:outline-none">
                <div className="rounded-md p-0.5 border-2">
                  <BiCalculator size="2rem" />
                </div>
                <p>&nbsp;&nbsp;</p>
                <div className="hidden md:block text-2xl font-semibold">
                  Probs;Calc
                </div>
              </button>
            </Link>
            <button
              className="text-2xl text-gray-100 focus:ring-0 focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              <TiThMenu />
            </button>
          </div>
          <div
            className={`w-full ${
              open ? 'block' : 'hidden'
            } flex flex-col md:flex-row mt-3`}
          >
            {navbarItems.map((item) => {
              return (
                <Link key={`navbar-${item.name}`} href={item.link} passHref>
                  <button className="navbar-button flex flex-row justify-start items-center text-gray-100 my-1 mr-0 md:my-0 md:mr-2">
                    <div className="capitalize font-semibold">{item.name}</div>
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
