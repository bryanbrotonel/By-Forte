import React, { useState, useEffect } from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import { NavLink, useLocation } from 'react-router-dom';
import CartDrawer from '../CartDrawer';
import { useAppSelector } from '../../app/hooks';
import { selectCartQuantity } from '../../app/cartSlice';
import NavMenu from './NavMenu';

function Navbar() {
  const [toggleNavMenu, setToggleNavMenu] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);

  let location = useLocation();
  const cartQuantity = useAppSelector(selectCartQuantity);

  useEffect(() => {
    document.body.style.overflow = toggleNavMenu ? 'hidden' : 'unset';
  }, [toggleNavMenu]);

  const links = [
    ['/editorial', 'Editorial'],
    ['/shop', 'Shop'],
    ['/about', 'About'],
  ];

  return (
    <React.Fragment>
      <div className="mx-4">
        <div className="container flex flex-row items-center py-4">
          <div className="basis-1/3">
            <div className="hidden md:flex md:flex-row md:gap-8">
              {links.map((link) => {
                const linkPath = link[0];
                const linkName = link[1];

                return (
                  <NavLink
                    className="text-sm uppercase hover:opacity-50"
                    key={linkName}
                    to={linkPath}
                  >
                    {linkName}
                  </NavLink>
                );
              })}
            </div>
            <div className="md:hidden">
              <MdOutlineMenu size={20} onClick={() => setToggleNavMenu(true)} />
            </div>
          </div>
          <div className="basis-1/3 text-center">
            <NavLink
              className="uppercase font-semibold hover:text-black/60"
              to="/"
            >
              By Forte
            </NavLink>
          </div>
          <div
            className={`${
              location.pathname === '/checkout' ? 'hidden' : ''
            } basis-1/3 text-right`}
          >
            <button
              onClick={() => setToggleCart(true)}
              className="uppercase text-sm text-light hover:text-black/60"
            >
              {`Cart${cartQuantity > 0 ? ` (${cartQuantity})` : ''}`}
            </button>
          </div>
        </div>
      </div>
      <NavMenu
        links={links}
        display={toggleNavMenu}
        toggleMenu={setToggleNavMenu}
      />
      <CartDrawer display={toggleCart} toggleMenu={setToggleCart} />
    </React.Fragment>
  );
}

export default Navbar;
