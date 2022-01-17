import React, { useContext } from 'react';
import PayCard from './PayCard';

import { TransactionContext } from '../../context/transactionContext';
import PaymentForm from './PaymentForm';

const commonstyles =
  'min-h-[70px] sm:px-0 px-2 sm:min-w=[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-white';

const Welcome = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col md:flex-row gap-y-10 items-start justify-between md:p-20 py-12 px-4">
        <article className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies on Krypto
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="btn-blue rounded-full py-3 mt-3"
            >
              Connect wallet
            </button>
          )}
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonstyles}`}>Reliability</div>
            <div className={`rounded-tr-2xl sm:rounded-none ${commonstyles}`}>
              Security
            </div>
            <div className={`sm:rounded-tr-2xl ${commonstyles}`}>Ethereum</div>
            <div className={`sm:rounded-bl-2xl ${commonstyles}`}>Web 3.0</div>
            <div className={`rounded-bl-2xl sm:rounded-none ${commonstyles}`}>
              Low fees
            </div>
            <div className={`rounded-br-2xl ${commonstyles}`}>Blockchain</div>
          </div>
        </article>
        <aside className="flex flex-col flex-1 gap-y-4">
          <div className="px-10 text-white">
            <PayCard currentAccount={currentAccount} />
          </div>
          <PaymentForm />
        </aside>
      </div>
    </div>
  );
};

export default Welcome;
