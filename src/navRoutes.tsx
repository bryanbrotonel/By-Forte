import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './scenes/Home';
import Loading from './components/Loading';
import About from './scenes/About';
import Editorial from './scenes/Editorial';
import NotFound from './components/NotFound';

const NavRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      }
    ></Route>
    <Route
      path="/about"
      element={
        <Suspense fallback={<Loading />}>
          <About />
        </Suspense>
      }
    ></Route>
    <Route
      path="/editorial"
      element={
        <Suspense fallback={<Loading />}>
          <Editorial />
        </Suspense>
      }
    ></Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default NavRoutes;
