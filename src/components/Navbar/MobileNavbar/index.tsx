import React, { useState, useEffect } from 'react';
import NavMenu from './NavMenu';
import { NavLink } from 'react-router-dom';

import { MdOutlineMenu } from 'react-icons/md';

function MobileNavbar(props: { links: string[][] }) {
  const { links } = props;

  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = toggleMenu ? 'hidden' : 'unset';
  }, [toggleMenu]);

  var navbarLinks = [...links];

  // Remove  home page link and assign to variable
  const homeLink = navbarLinks.shift();

  return (
    <React.Fragment>
      <div className="md:hidden">
        <div className="bg-black text-white px-4">
          <div className="container py-6 flex justify-between items-center">
            <div>
              <NavLink className="text-xl font-bold" to={homeLink[0]}>
                {homeLink[1]}
              </NavLink>
            </div>
            <div>
              <MdOutlineMenu size={20} onClick={() => setToggleMenu(true)} />
            </div>
          </div>
        </div>
      </div>
      <NavMenu
        links={navbarLinks}
        display={toggleMenu}
        toggleMenu={setToggleMenu}
      />
    </React.Fragment>
  );
}

export default MobileNavbar;
