import React from 'react';
import { shortAddress } from '../utils/shortAddress';

const TransactionCard = ({
  addressTo,
  addressFrom,
  message,
  keyword,
  amount,
  url,
  timestamp,
}) => (
  <div
    className="bg-[#181918] flex flex-1 gap-2
  2xl:min-w-[450px]
  2xl:max-w-[500px]
  sm:min-w-[270px]
  sm:max-w-[300px]
  flex-col py-4 px-5  rounded-md hover:shadow-2xl text-white
  "
  >
    <p>
      From:
      <a
        href={`https://ropsten.etherscan.io/address/${addressFrom}`}
        className="ml-2"
      >
        {shortAddress(addressFrom)}
      </a>
    </p>
    <p>
      To:
      <a
        href={`https://ropsten.etherscan.io/address/${addressFrom}`}
        className="ml-2"
      >
        {shortAddress(addressFrom)}
      </a>
    </p>
    <p>Amount: {amount} ETH</p>
    {message && <p>Message: {message}</p>}
    <div className="bg-black py-3 px-5 rounded-3xl shadow-2xl">
      <p className="text-[#37c7da] text-center">{timestamp}</p>
    </div>
  </div>
);

export default TransactionCard;
