import React, { useEffect } from 'react';

import NavRoutes from '../../navRoutes';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useLocation } from 'react-router-dom';

const App = () => {
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [useLocation()]);

  return (
    <div className="flex flex-col h-screen justify-between bg-white">
      <Navbar />
      <div className="mb-auto max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <NavRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
