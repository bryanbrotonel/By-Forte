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
    <div className="sticky inset-x-0 top-0 bg-white z-50">
      <DesktopNavbar links={links} />
      <MobileNavbar links={links} />
    </div>
  );
}

export default Navbar;
