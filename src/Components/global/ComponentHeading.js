import React from 'react';

const ComponentHeading = (props) => {
  return (
    <div>
      <h3 className="text-brand text-xl font-semibold">{props.title}</h3>
      <h1 className="text-4xl font-bold">{props.subtitle}</h1>
    </div>
  );
};

export default ComponentHeading;
