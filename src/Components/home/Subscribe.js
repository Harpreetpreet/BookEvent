import React from 'react';
import Title from '../atom/Title';
import Subtitle from './../atom/Subtitle';
const Subscribe = () => {
  return (
    <div className=" bg-[url(/images/pattern1.png)]  py-28">
      <div className="container mx-auto grid grid-cols-2 px-16">
        <div className="flex flex-col justify-end ">
          <h1 className="text-brand pb-2"> Be the first to hear about our updates</h1>
          <Subtitle hasTextWhite subtitle="Subscribe Newsletter" />
        </div>
        <div className="flex justify-start">
          <input
            type="email"
            className=" bg-black/40 pl-4 border-1 text-xs w-[500px]"
            placeholder="Your Email Here"
          />
          <button className="bg-brand text-white text-bold px-8 ml-.5 ">
            <span> SUBSCRIBE</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
