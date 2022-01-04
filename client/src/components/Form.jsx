import React from 'react';

const inputs = [
  { name: 'address', placeholder: 'Address To' },
  { name: 'amount', placeholder: 'Amount (ETH)' },
  { name: 'keyword', placeholder: 'Keyword (gif)' },
  { name: 'twitter', placeholder: 'Twitter @' },
];

const Form = () => (
  <form className="flex flex-col p-10 blue-glassmorphism">
    {inputs.map((input) => (
      <input
        type="text"
        name={input.name}
        key={input.name}
        placeholder={input.placeholder}
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

export default Form;
