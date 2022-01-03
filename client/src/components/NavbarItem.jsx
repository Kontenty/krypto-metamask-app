import React from 'react';

const NavbarItem = ({ title, classProps }) => (
  <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>
);

export default NavbarItem;
