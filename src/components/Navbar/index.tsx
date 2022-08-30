import React, { useState, useEffect } from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import { NavLink, useLocation } from 'react-router-dom';
import CartDrawer from '../CartDrawer';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectCartQuantity, toggleDrawer } from '../../app/cartSlice';
import NavMenu from './NavMenu';

function Navbar() {
  let location = useLocation();
  let dispatch = useAppDispatch();

  const [toggleNavMenu, setToggleNavMenu] = useState(false);

  const cartQuantity = useAppSelector(selectCartQuantity);

  useEffect(() => {
    document.body.style.overflow = toggleNavMenu ? 'hidden' : 'unset';
  }, [toggleNavMenu]);

  const links = [
    ['/shop', 'Shop'],
    ['/editorial', 'Editorial'],
    ['/about', 'About'],
  ];

  return (
    <React.Fragment>
      <div className="px-4 fixed top-0 w-full z-[38] bg-white">
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
          <div className="basis-1/3 text-center ">
            <NavLink
              className="uppercase font-semibold hover:text-black/60"
              to="/"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/by-forte.appspot.com/o/logos%2FBy%20Forte%20Logo.png?alt=media&token=77605eca-734a-4d7d-ab4a-5de18c525557"
                alt=""
                className='w-12 md:w-16 mx-auto'
              />
            </NavLink>
          </div>
          <div
            className={`${
              location.pathname === '/checkout' ? 'hidden' : ''
            } basis-1/3 text-right`}
          >
            <button
              onClick={() => dispatch(toggleDrawer())}
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
      <CartDrawer />
    </React.Fragment>
  );
}

export default Navbar;
