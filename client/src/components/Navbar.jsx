import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';

import NavbarItem from './NavbarItem';
import Logo from '../images/logo.png';

const navItems = ['Market', 'Exchange', 'Tutorials', 'Wallets'];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div>
      <nav className="w-full flex md:justify-center p-4">
        <div className="md:flex=[0.5] flex-initial">
          <img src={Logo} alt="logo" className="w4" />
        </div>
        <ul className="text-white hidden md:flex list-none justify-between items-center flex-initial">
          {navItems.map((item, index) => (
            <NavbarItem title={item} key={index + item} />
          ))}
          <li className="py-2 px-7 mx-4 rounded-full cursor-pointer btn-blue">
            Login
          </li>
        </ul>
        <div className="flex relative md:hidden">
          {toggleMenu ? (
            <AiOutlineClose
              fontSize={28}
              className="text-white cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <HiMenuAlt4
              fontSize={28}
              className="text-white cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <ul className="fixed z-10 top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white">
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              {navItems.map((item, index) => (
                <NavbarItem
                  title={item}
                  key={index + item}
                  classProps="my-2 text-lg"
                />
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
