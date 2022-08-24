import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './scenes/Home';
import Loading from './components/Loading';
import About from './scenes/About';


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
  </Routes>
);

export default NavRoutes;
