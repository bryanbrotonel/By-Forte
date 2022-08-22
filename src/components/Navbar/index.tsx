import React from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

function Navbar() {
  const links = [
    ['/', 'By Forte'],
    ['/editorial', 'Editorial'],
    ['/shop', 'Shop'],
    ['/about', 'About'],
  ];

  return (
    <React.Fragment>
      <DesktopNavbar links={links} />
      <MobileNavbar links={links} />
    </React.Fragment>
  );
}

export default Navbar;
