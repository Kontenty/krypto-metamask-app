import React, { useContext } from 'react';
import { TransactionContext } from '../context/transactionContext';
import TransactionCard from './TransactionCard';
import dummyData from '../utils/dummyData';

const Transactions = () => {
  const { currentAccount } = useContext(TransactionContext);
  return (
    <div className="flex w-full justify-center items-center 2xl:p-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest transactions
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see your transactions
          </h3>
        )}

        <div className="flex flex-wrap gap-5 justify-center items-center mt-10">
          {dummyData.reverse().map((transaction) => (
            <TransactionCard key={transaction.id} {...transaction} />
          ))}
        </div>
      </div>
      <h1>Trans</h1>
    </div>
  );
};

export default Transactions;
