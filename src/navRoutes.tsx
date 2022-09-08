import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import NotFound from './components/NotFound';

const Home = lazy(() => import('./scenes/Home'));
const About = lazy(() => import('./scenes/About'));
const Editorial = lazy(() => import('./scenes/Editorial'));
const Shop = lazy(() => import('./scenes/Shop'));
const ProductPage = lazy(() => import('./scenes/ProductPage'));
const Checkout = lazy(() => import('./scenes/Checkout'));

const NavRoutes = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/editorial" element={<Editorial />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/shop/:id" element={<ProductPage />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default NavRoutes;
