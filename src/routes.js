import React from 'react';

import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router-dom';

import Loadable from 'react-loadable';

import Loading from './components/Loading';

const HomeLoadable = Loadable({
  loader: () => import('./scenes/Home'),
  loading: Loading,
});

const AboutLoadable = Loadable({
  loader: () => import('./scenes/About'),
  loading: Loading,
});

const EditorialLoadable = Loadable({
  loader: () => import('./scenes/Editorial'),
  loading: Loading,
});

const ShopLoadable = Loadable({
  loader: () => import('./scenes/Shop'),
  loading: Loading,
});

const ProductInfoLoadable = Loadable({
  loader: () => import('./scenes/Product Info'),
  loading: Loading,
});

const CartLoadable = Loadable({
  loader: () => import('./scenes/Cart'),
  loading: Loading,
});

const CheckoutLoadable = Loadable({
  loader: () => import('./scenes/Checkout'),
  loading: Loading,
});

const ContactLoadable = Loadable({
  loader: () => import('./scenes/Contact'),
  loading: Loading,
});

const TermsAndConditionsLoadable = Loadable({
  loader: () => import('./scenes/Terms and Conditions'),
  loading: Loading,
});

const RefundPolicyLoadable = Loadable({
  loader: () => import('./scenes/Refund Policy'),
  loading: Loading,
});

const PageNotFoundLoadable = Loadable({
  loader: () => import('./scenes/Page Not Found'),
  loading: Loading,
});

const Routing = () => (
  <Routes>
    <Route path="home" element={<Navigate to="/" />} />
    <Route exact={true} path="/" element={<HomeLoadable />} />
    <Route exact={true} path="/about" element={<AboutLoadable />} />
    <Route exact={true} path="/editorial" element={<EditorialLoadable />} />
    <Route exact={true} path="/shop" component={<ShopLoadable />} />
    <Route
      path="/shop/collections/tops/products/:itemName/:itemVariation"
      element={<ProductInfoLoadable />}
    />
    <Route path="/cart" element={<CartLoadable />} />
    <Route path="/checkout" element={<CheckoutLoadable />} />
    <Route path="/contact" element={<ContactLoadable />} />
    <Route
      path="/terms-and-conditions"
      element={<TermsAndConditionsLoadable />}
    />
    <Route path="/refund-policy" element={<RefundPolicyLoadable />} />
    <Route path="*" exact={true} element={<PageNotFoundLoadable />} />
  </Routes>
);

export default Routing;
