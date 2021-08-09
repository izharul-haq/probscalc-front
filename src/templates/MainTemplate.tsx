import React, { ReactNode } from 'react';
import Navbar from '~/components/common/Navbar';
import Footer from '~/components/common/Footer';

interface Props {
  meta: ReactNode;
}

const MainTemplate: React.FC<Props> = (props) => {
  return (
    <div className="antialiased w-full">
      {props.meta}
      <Navbar />
      <main className="w-full min-h-screen">{props.children}</main>
      <Footer />
    </div>
  );
};

export default MainTemplate;
