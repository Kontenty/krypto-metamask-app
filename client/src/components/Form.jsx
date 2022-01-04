import React from 'react';
import { useForm } from 'react-hook-form';

const inputs = [
  { name: 'address', placeholder: 'Address To' },
  { name: 'amount', placeholder: 'Amount (ETH)', type: 'number' },
  { name: 'keyword', placeholder: 'Keyword (gif)' },
  { name: 'twitter', placeholder: 'Twitter @' },
];

const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-10 blue-glassmorphism"
    >
      {inputs.map((input) => (
        <input
          type={input.type ?? 'text'}
          key={input.name}
          placeholder={input.placeholder}
          {...register(input.name)}
          className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-small white-glassmorphism"
        />
      ))}
      <textarea
        name="message"
        id="message"
        placeholder="Enter message"
        className="mt-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-small white-glassmorphism resize-none"
      />
      <hr className="border-gray-400 my-4" />
      <button
        type="submit"
        className="text-white border-gray-400 border-2 rounded-full py-2"
      >
        Send now
      </button>
    </form>
  );
};

export default Form;
