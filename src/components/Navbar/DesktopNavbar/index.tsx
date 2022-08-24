import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function DesktopNavbar(props: { links: string[][] }) {
  const { links } = props;

  var desktopLinks = [...links];

  // Remove  home page link and assign to variable
  const homeLink = desktopLinks.shift();

  // Remaining pages
  const pages = desktopLinks;

  return (
    <div className="hidden md:block">
      <div className="container flex flex-row justify-between items-center py-4 border-b broder-gray-500">
        <div>
          <NavLink className="text-2xl font-semibold" to={homeLink[0]}>
            {homeLink[1]}
          </NavLink>
        </div>
        <div className="justify-self-center flex flex-row gap-8">
          {pages.map((link) => {
            const linkPath = link[0];
            const linkName = link[1];

            return (
              <NavLink
                className="font-semibold text-sm uppercase hover:opacity-50"
                key={linkName}
                to={linkPath}
              >
                {linkName}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DesktopNavbar;