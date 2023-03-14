import React, { Children } from 'react';
import HomeHero from '../home/HomeHero';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children, pageTitle, isHome }) => {
  return (
    <div>
      {isHome && (
        <div className="relative bg-[url('/images/bg-main.jpg')] bg-fixed bg-cover bg-no-repeat pb-60">
          <Navbar />
          <HomeHero />
        </div>
      )}
      {!isHome && (
        <div
          className={`bg-[url('/images/banner1.jpg')] bg-no-repeat bg-cover mx-auto `}
        >
          <Navbar />
          <div className="text-center py-14 pb-32">
            <h1 className="text-white text-6xl font-bold">{pageTitle}</h1>
          </div>
        </div>
      )}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
