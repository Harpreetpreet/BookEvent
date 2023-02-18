import React from 'react';
import Button from '../atom/Button';

const Subscribe = () => {
  return (
    <div className="flex bg-red-500 justify-around">
      <div>
        <h3>Be the first to hear about our updates</h3>
        <h1>Subscribe Newsletter</h1>
      </div>
      <div>
        <div className="items-center">
          <input
            className=" bg-[#232323] "
            type="email"
            placeholder="Enter your email address"
          />
          <Button button="SUBSCRIBE" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
