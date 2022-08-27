import React from 'react';
import Cookies from 'js-cookie';

function CookieBanner(props: { displayBanner: Function }) {
  const { displayBanner } = props;

  const acceptCookies = () => {
    // Accept cookies
    Cookies.set('cookiesAccepted', 'true');
    displayBanner(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 bg-black text-white text-center py-4">
      <div className="flex flex-row justify-center items-center">
        <div className="flex-1">
          <p className="text-sm">
            This website uses cookies to ensure you get the best experience on
            our website.
          </p>
        </div>
        <div className="flex-1">
          <button
            onClick={acceptCookies}
            className="bg-white hover:bg-white/80 hover:cursor-pointer text-black font-semibold py-2 px-4"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
