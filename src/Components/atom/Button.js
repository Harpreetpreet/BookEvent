import React from 'react';

const Button = ({ button }) => {
  return (
    <button
      type="button"
      className="p-3 px-6 my-6 bg-brand text-white font-medium text-xm leading-tight rounded shadow-md hover:shadow-lg active:bg-pink-600 active:shadow-lg transition duration-150 ease-in-out"
    >
      {button}
    </button>
  );
};

export default Button;
