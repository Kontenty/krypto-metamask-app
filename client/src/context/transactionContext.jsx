import React, { useState, useEffect, useMemo } from 'react';
import { ethers } from 'ethers';
import { contractAbi, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState(null);

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

    console.log({
      provider,
      signer,
      transactionContract,
    });
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

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  const contextValue = useMemo(
    () => ({ connectWallet, currentAccount }),
    [currentAccount]
  );

  return (
    <TransactionContext.Provider value={contextValue}>
      {children}
    </TransactionContext.Provider>
  );
};
