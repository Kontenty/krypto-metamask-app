import React, { useState, useEffect, useMemo } from 'react';
import { ethers } from 'ethers';
import { contractAbi, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [isTransactionLoading, setIsTransactionLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem('transactionCount') ?? 0
  );

  const checkIfWalletConnected = async () => {
    if (!ethereum) return alert('Please install metamask');

    try {
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        // getAllTransactions()
      } else {
        console.log('No accounts found');
      }
    } catch (error) {
      console.log(error);
      throw new Error('No ethereum object');
    }
  };

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
    console.log({ addressTo, amount, keyword, message });
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
    } catch (error) {
      console.log('Transaction error', error);
      throw new Error('Transaction error');
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  const contextValue = useMemo(
    () => ({
      connectWallet,
      sendTransaction,
      currentAccount,
      isTransactionLoading,
      transactionCount,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentAccount]
  );

  return (
    <TransactionContext.Provider value={contextValue}>
      {children}
    </TransactionContext.Provider>
  );
};
