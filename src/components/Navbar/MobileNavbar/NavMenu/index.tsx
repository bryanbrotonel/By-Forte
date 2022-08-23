import React from 'react';
import { NavLink } from 'react-router-dom';

import { MdClose } from 'react-icons/md';

interface PropTypes {
  links: string[][];
  display: boolean;
  toggleMenu: Function;
}

function NavMenu(props: PropTypes) {
  const { links, display, toggleMenu } = props;

  return (
    <div
      className={`${
        display ? 'transform-none' : 'translate-x-full'
      } md:hidden fixed top-0 right-0 z-40 h-screen w-screen bg-black transition-transform ease-out duration-500`}
    >
      <div className="flex justify-end m-5 text-white">
        <MdClose size={20} onClick={() => toggleMenu(false)} />
      </div>
      <div className="mb-auto max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-10 pt-5">
          {links.map((link) => {
            const linkPath = link[0];
            const linkName = link[1];

            return (
              <NavLink
                className="text-white text-2xl uppercase font-bold"
                key={linkName}
                to={linkPath}
                onClick={() => toggleMenu(false)}
              >
                {linkName}
              </NavLink>
            );
          })}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
