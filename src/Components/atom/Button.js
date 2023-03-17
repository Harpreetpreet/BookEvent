import React, { useState } from 'react';

const Button = ({ children, active, ...props }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <button
      onClick={() => setClicked(clicked)}
      type="button"
      className={`p-3 px-6 my-6 bg-brand text-white font-medium text-xm leading-tight rounded shadow-md hover:shadow-lg transition duration-150 ease-in-out ${
        active ? 'bg-brand' : 'bg-secondary'
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
