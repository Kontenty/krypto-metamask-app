import React from 'react';
import { useForm } from 'react-hook-form';

const inputs = [
  {
    name: 'addressTo',
    placeholder: 'Address To',
    validation: { required: true },
  },
  {
    name: 'amount',
    placeholder: 'Amount (ETH)',
    type: 'number',
    validation: { required: true },
  },
  {
    name: 'keyword',
    placeholder: 'Keyword (gif)',
    validation: { required: true },
  },
  { name: 'twitter', placeholder: 'Twitter @' },
];

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-10 blue-glassmorphism"
    >
      {inputs.map((input) => (
        <React.Fragment key={input.name}>
          <input
            type={input.type ?? 'text'}
            placeholder={input.placeholder}
            {...register(input.name, input.validation)}
            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-small white-glassmorphism"
          />
          {errors[input.name]?.type === 'required' && (
            <span className="text-red-300">
              {input.placeholder} is required
            </span>
          )}
        </React.Fragment>
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
        className="text-white border-gray-400 border rounded-full py-2"
      >
        Send now
      </button>
    </form>
  );
};

export default Form;
