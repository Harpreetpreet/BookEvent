import React from 'react';

const Title = ({ title, hasTextBrand }) => {
  return (
    <div>
      <h1
        className={`text-xl font-semibold ${
          hasTextBrand ? 'text-brand' : 'text-secondary'
        }`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Title;
