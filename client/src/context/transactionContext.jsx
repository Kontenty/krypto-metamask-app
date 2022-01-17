import React, { useState, useEffect, useMemo } from 'react';
import { ethers } from 'ethers';
import { contractAbi, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [isTransactionLoading, setIsTransactionLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem('transactionCount') ?? 0
  );

  console.log('transactions in context', transactions);

  const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer
    );

    return transactionContract;
  };

  const getAllTransactions = async () => {
    if (!ethereum) return alert('Please install metamask');
    try {
      const transactionContract = getEthereumContract();
      const availableTransactions =
        await transactionContract.getAllTransactions();
      const structuredTransactions = availableTransactions.map(
        ({ message, keyword, ...transaction }) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(
            transaction.timestamp.toNumber() * 1000
          ).toLocaleString(),
          message,
          keyword,
          amount: parseInt(transaction.amount._hex) / 10 ** 18,
        })
      );
      console.log({ availableTransactions, structuredTransactions });
      setTransactions(structuredTransactions);
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletConnected = async () => {
    if (!ethereum) return alert('Please install metamask');

    try {
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getAllTransactions();
      } else {
        console.log('No accounts found');
      }
    } catch (error) {
      console.log(error);
      throw new Error('No ethereum object');
    }
  };

  const checkIfTransactionExists = async () => {
    try {
      const transactionContract = getEthereumContract();
      const currentTransactionCount =
        await transactionContract.getTransactionCount();

      window.localStorage.setItem('transactionCount', currentTransactionCount);
    } catch (error) {
      console.log(error);
      throw new Error('No ethereum object');
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install metamask');
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error('No ethereum object');
    }
  };

  const sendTransaction = async ({ addressTo, amount, keyword, message }) => {
    if (!ethereum) return alert('Please install metamask');
    try {
      const transactionContract = getEthereumContract();
      console.log(`Transaction contract - ${transactionContract}`);

      const parsedAmount = ethers.utils.parseEther(amount);
      console.log(`Parsed amount - ${parsedAmount} - ${parsedAmount._hex}`);

      setIsTransactionLoading(true);

      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: '0x5208', // 21000 GWEI
            value: parsedAmount._hex,
          },
        ],
      });

      const transactionHash = await transactionContract.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
        keyword
      );
      console.log(`Transaction is loading - ${transactionHash.hash}`);
      await transactionHash.wait();
      setIsTransactionLoading(false);
      console.log(`Transaction success - ${transactionHash.hash}`);

      const currentTransactionCount =
        await transactionContract.getTransactionCount();
      setTransactionCount(currentTransactionCount.toNumber());
      localStorage.setItem(
        'transactionCount',
        currentTransactionCount.toNumber()
      );
      getAllTransactions();
    } catch (error) {
      console.log('Transaction error', error);
      throw new Error('Transaction error');
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
    checkIfTransactionExists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue = useMemo(
    () => ({
      connectWallet,
      sendTransaction,
      currentAccount,
      transactions,
      isTransactionLoading,
      transactionCount,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentAccount, isTransactionLoading, transactionCount, transactions]
  );

  return (
    <TransactionContext.Provider value={contextValue}>
      {children}
    </TransactionContext.Provider>
  );
};
