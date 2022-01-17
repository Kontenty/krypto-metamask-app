import React from 'react';
import logo from '../images/logo.png';

const Footer = () => (
  <div className="flex gap-2 w-full md:justify-center justify-between items-center flex-col gradient-bg-footer py-5">
    <div className="w-full flex flex-col md:flex-row justify-between items-center mb-5">
      <div className="flex-centered flex-[0.5]">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full text-white">
        <p className="text-base text-center mx-2 cursor-pointer">Market</p>
        <p className="text-base text-center mx-2 cursor-pointer">Exchange</p>
        <p className="text-base text-center mx-2 cursor-pointer">Tutorials</p>
        <p className="text-base text-center mx-2 cursor-pointer">Wallets</p>
      </div>
    </div>
    <p className="text-white text-sm text-center mt-4 mb-2">Come join us</p>
    <p className="text-white text-sm text-center">info@cryptomastery.com</p>
    <div className="h-line" />
    <div className="sm:w-10/12 w-full flex justify-between items-centermt-3">
      <p className="text-white text-sm text-center mt-4 mb-2">
        @kryptomastery 2022
      </p>
      <p className="text-white text-sm text-center mt-4 mb-2">
        All right reserved
      </p>
    </div>
  </div>
);

export default Footer;
