import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { TransactionContext } from '../../context/transactionContext';

import Loader from '../Loader';

const styles = {
  input:
    'w-full rounded-sm py-2 px-3 outline-none bg-transparent text-white border-none text-small white-glassmorphism',
  error: 'text-red-300 text-xs',
};

const PaymentForm = () => {
  const { sendTransaction, isTransactionLoading } =
    useContext(TransactionContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => sendTransaction(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-10 blue-glassmorphism"
    >
      <div>
        <input
          placeholder="Address to"
          {...register('addressTo', { required: true })}
          className={styles.input}
        />
        {errors?.addressTo?.type === 'required' && (
          <span className={styles.error}>! "Address to" is required</span>
        )}
      </div>
      <div>
        <input
          type="number"
          step={0.0001}
          placeholder="Amount (ETH)"
          {...register('amount', { required: true, min: 0.0001 })}
          className={styles.input}
        />
        {errors?.amount?.type === 'required' && (
          <span className={styles.error}>! "Amount" is required</span>
        )}
        {errors?.amount?.type === 'min' && (
          <span className={styles.error}>! To small</span>
        )}
      </div>
      <div>
        <input
          placeholder="Gif keyword"
          {...register('keyword')}
          className={styles.input}
        />
      </div>
      <textarea
        placeholder="Enter message"
        {...register('message')}
        className={`${styles.input} resize-none`}
      />
      <hr className="border-gray-400" />
      {isTransactionLoading ? (
        <Loader />
      ) : (
        <button
          type="submit"
          className="text-white border-gray-400 border rounded-full py-2 text-"
        >
          Send now
        </button>
      )}
    </form>
  );
};

export default PaymentForm;
