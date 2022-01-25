import React from 'react';

import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router-dom';

import Home from './scenes/Home';
import About from './scenes/About';
import Editorial from './scenes/Editorial';
import Shop from './scenes/Shop';
import ProductInfo from './scenes/Product Info';
import Cart from './scenes/Cart';
import Checkout from './scenes/Checkout';
import Contact from './scenes/Contact';
import TermsAndConditions from './scenes/Terms and Conditions';
import RefundPolicy from './scenes/Refund Policy';
import PageNotFound from './scenes/Page Not Found';

const Routing = () => (
  <Routes>
    <Route path="home" element={<Navigate to="/" />} />
    <Route exact={true} path="/" element={<Home />} />
    <Route exact={true} path="/about" element={<About />} />
    <Route exact={true} path="/editorial" element={<Editorial />} />
    <Route exact={true} path="/shop" element={<Shop />} />
    <Route
      path="/shop/collections/tops/products/:itemName/:itemVariation"
      element={<ProductInfo />}
    />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    <Route path="/refund-policy" element={<RefundPolicy />} />
    <Route path="*" exact={true} element={<PageNotFound />} />
  </Routes>
);

export default Routing;
