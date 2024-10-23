import React, { Fragment } from 'react';

import Header from '../UI/Header/Header';
import Footer from '../UI/Footer/Footer';
import Sections from '../sections/Sections';
import { BrowserRouter } from 'react-router-dom';

const Layout = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <main>
          <Sections />
        </main>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
};

export default Layout;
