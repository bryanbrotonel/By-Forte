import React, { useEffect } from 'react';
import { setCart } from '../../app/cartSlice';
import { useAppDispatch } from '../../app/hooks';
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';

import NavRoutes from '../../navRoutes';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CookieBanner from '../../components/CookieBanner';

const App = () => {
  const [displayCookieBanner, setDisplayCookieBanner] = React.useState(false);

  const dispatch = useAppDispatch();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [useLocation()]);

  // Check if cookies are accepted
  useEffect(() => {
    // Check if user has cart cookies
    const cookiesAccepted = Cookies.get('cookiesAccepted');

    if (!cookiesAccepted) {
      // If cookies are not accepted, display cookie banner
      setDisplayCookieBanner(true);
    } else if (cookiesAccepted === 'true') {
      // If cookies are accepted, hide cookie banner
      setDisplayCookieBanner(false);

      if (Cookies.get('cart')) {
        // If cookies are accepted and cart cookie exists, set previous cart
        dispatch(setCart(JSON.parse(Cookies.get('cart') || '')));
      }
    }
  }, [displayCookieBanner]);

  return (
    <div className="relative flex flex-col min-h-screen justify-between">
      <Navbar />
      <div className="mb-auto mt-[56px]">
        <NavRoutes />
      </div>
      <Footer />
      {displayCookieBanner && (
        <CookieBanner displayBanner={setDisplayCookieBanner} />
      )}
    </div>
  );
};

export default App;
