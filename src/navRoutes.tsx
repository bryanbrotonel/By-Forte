import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './scenes/Home';
import Loading from './components/Loading';


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
  </Routes>
);

export default NavRoutes;
