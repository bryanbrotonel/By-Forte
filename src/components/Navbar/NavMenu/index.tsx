import React from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '../../Drawer';

function NavMenu(props: {
  links: string[][];
  display: boolean;
  toggleMenu: Function;
}) {
  const { links, display, toggleMenu } = props;

  return (
    <Drawer poistion={'left'} display={display} toggleMenu={toggleMenu}>
      <div className="flex flex-col gap-5 pt-5">
        {links.map((link) => {
          const linkPath = link[0];
          const linkName = link[1];

          return (
            <NavLink
              className="text-black text-lg uppercase"
              key={linkName}
              to={linkPath}
              onClick={() => toggleMenu(false)}
            >
              {linkName}
            </NavLink>
          );
        })}
      </div>
    </Drawer>
  );
}

export default NavMenu;
