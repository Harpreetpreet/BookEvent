import React from 'react';

const Subtitle = ({ subtitle, hasTextWhite }) => {
  return (
    <div>
      <h3
        className={`text-4xl font-bold ${
          hasTextWhite ? ' text-white ' : 'text-secondary'
        }`}
      >
        {' '}
        {subtitle}
      </h3>
    </div>
  );
};

export default Subtitle;
