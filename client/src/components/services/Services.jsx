import React from 'react';
import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

import ServiceCard from './ServiceCard';

const serviceCards = [
  {
    title: 'Security Guarantee',
    subtitle:
      'Security is guaranteed. Wa always maintain privacy and mantain the quality of our products.',
    color: '#2952E3',
    icon: <BsShieldFillCheck fontSize={21} color="white" />,
  },
  {
    title: 'Best Exchange Rates',
    subtitle:
      'Security is guaranteed. Wa always maintain privacy and mantain the quality of our products.',
    color: '#8945F8',
    icon: <BiSearchAlt fontSize={21} color="white" />,
  },
  {
    title: 'Fastest Transactions',
    subtitle:
      'Security is guaranteed. Wa always maintain privacy and mantain the quality of our products.',
    color: '#F84550',
    icon: <RiHeart2Fill fontSize={21} color="white" />,
  },
];

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1">
        <h1 className="text-white text-3xl py-2 text-gradient">
          Services that we
          <br />
          continue to improve
        </h1>
      </div>
      <div className="flex flex-1 flex-col justify-start items-center">
        {serviceCards.map((card, i) => (
          <ServiceCard key={`card${i}`} {...card} />
        ))}
      </div>
    </div>
  </div>
);

export default Services;
