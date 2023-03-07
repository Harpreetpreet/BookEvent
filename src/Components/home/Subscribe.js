import React from 'react';
import Title from '../atom/Title';
import Subtitle from './../atom/Subtitle';
const Subscribe = () => {
  return (
    <div className=" bg-[url(/images/pattern1.png)]  py-28 mx-auto">
      <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 md:px-16 px-8">
        <div className="flex flex-col md:justify-end mx-auto ">
          <h1 className="text-brand pb-2 md:text-lg">
            {' '}
            Be the first to hear about our updates
          </h1>
          <h1 className="text-white font-bold text-4xl">
            Subscribe Newsletter
          </h1>
        </div>
        <div className="flex justify-start pt-6 ">
          <input
            type="email"
            className=" bg-black/40 pl-4 border-1 text-xs w-[500px]"
            placeholder="Your Email Here"
          />
          <button className="bg-brand text-white text-bold px-8 ml-.5">
            <span> SUBSCRIBE</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
