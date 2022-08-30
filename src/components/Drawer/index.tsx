import React, { useEffect } from 'react';

import { MdClose } from 'react-icons/md';

function Drawer(props: {
  poistion: 'left' | 'right';
  display: boolean;
  toggleMenu: Function;
  children: React.ReactNode;
}) {
  const { poistion, display, toggleMenu, children } = props;

  useEffect(() => {
    document.body.style.overflow = display ? 'hidden' : 'unset';
  }, [display]);

  return (
    <React.Fragment>
      <div
        onClick={() => toggleMenu(false)}
        className={`absolute inset-0 ${
          display ? 'visible opacity-70' : 'invisible opacity-0'
        } z-[39] bg-black transition-all ease-out duration-500`}
      />
      <div
        className={`${
          display
            ? 'transform-none'
            : poistion === 'left'
            ? '-translate-x-full'
            : 'translate-x-full'
        } fixed inset-y-0 ${
          poistion === 'left' ? 'left-0' : 'right-0'
        } z-40 h-screen w-80 md:w-96 max-w-screen bg-white transition-transform ease-out duration-500`}
      >
        <div className="flex justify-end m-5 text-black">
          <button onClick={() => toggleMenu(false)}>
            <MdClose size={20} />
          </button>
        </div>
        <div className="mb-auto max-w-8xl mx-auto px-4 sm:px-6">{children}</div>
      </div>
    </React.Fragment>
  );
}

export default Drawer;
