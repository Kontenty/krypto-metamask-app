import React from 'react';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { shortAddress } from '../../utils/shortAddress';

const PayCard = ({ currentAccount }) => (
  <div className="w-full h-40 flex flex-col justify-between p-3 eth-card white-glassmorphism">
    <div className="flex justify-between">
      <div className="flex-centered w-10 h-10 rounded-full border-white border-2">
        <SiEthereum color="#fff" fontSize="1.25rem" />
      </div>
      <BsInfoCircle fontSize="1.25rem" />
    </div>
    <div className="flex flex-col">
      <span className="text-sm text-light">{shortAddress(currentAccount)}</span>
      <span className="text-lg">Ethereum</span>
    </div>
  </div>
);

export default PayCard;
