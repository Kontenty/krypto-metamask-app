import React from 'react';

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div
      className="flex-centered  w-10 h-10 rounded-full"
      style={{ backgroundColor: color }}
    >
      {icon}
    </div>
    <div className="text-white ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-lg">{title}</h3>
      <p className="text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

export default ServiceCard;
