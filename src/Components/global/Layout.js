import React, { Children } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children, hideNavbar }) => {
  return (
    <div>
      {!hideNavbar && <Navbar />}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
