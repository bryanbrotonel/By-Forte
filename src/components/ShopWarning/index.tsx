import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';

function ShopWarning() {
  const [display, setDisplay] = useState(false);

  // If the user hasn't seen the warning, display it and set a cookie
  useEffect(() => {
    if (Cookies.get('shopWarning') !== 'true') {
      setTimeout(() => {
        setDisplay(true);
        Cookies.set('shopWarning', 'true', { expires: 7 });
      }, 1000);
    }
  }, []);

  return (
    <div
      className={`${
        display
          ? 'visible opacity-100 delay-1000 duration-500'
          : 'invisible opacity-0 duration-200'
      } fixed inset-0 flex justify-center items-center p-8 bg-black/70 transition-all ease-in-out`}
    >
      <div className="max-w-lg bg-white py-6 px-12">
        <div>
          <h1 className="font-semibold mb-2">Please Note</h1>
          <p>
            The online shop is for demonstration purposes only. The checkout
            process is functional, however no orders will be fulfilled. Thank
            you.
          </p>
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={() => setDisplay(false)}
            className="bg-black text-white px-4 py-2"
          >
            <span className="text-sm font-semibold">Dismiss</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopWarning;
