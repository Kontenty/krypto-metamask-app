import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractAbi, contractAddress } from '../utils/constants';

const TransactionContext = React.createContext();

const { ethereum } = window;

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState(null);

  const checkIfWalletConnected = async () => {
    if (!ethereum) return alert('Please install metamask');

    const accounts = await ethereum.request({ method: 'eth_accounts' });
    console.log(accounts);
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

  return (
    <TransactionContext.Provider value={{ connectWallet }}>
      {children}
    </TransactionContext.Provider>
  );
};
