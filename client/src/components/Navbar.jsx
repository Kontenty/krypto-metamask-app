import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';

import NavbarItem from './NavbarItem';
import Logo from '../images/logo.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div>
      <nav className="w-full flex md:justify-center p-4">
        <div className="md:flex=[0.5] flex-initial">
          <img src={Logo} alt="logo" className="w4" />
        </div>
        <ul className="text-white md:flex list-none justify-between flex- items-center flex-initial">
          {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
            <NavbarItem title={item} key={index} />
          ))}
          <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
            Login
          </li>
        </ul>
        <div className="flex relative">
          {toggleMenu ? (
            <AiOutlineClose
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <HiMenuAlt4
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
