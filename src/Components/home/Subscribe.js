import React from 'react';
import Title from '../atom/Title';
import Subtitle from './../atom/Subtitle';
const Subscribe = () => {
  return (
    <div className=" bg-[url(/images/pattern1.png)]  py-24">
      <div className="container flex justify-around">
        <div>
          <Title hasTextBrand title="Be the first to hear about our updates" />
          <Subtitle hasTextWhite subtitle="Subscribe Newsletter" />
        </div>
        <div>
          <div>
            <input
              type="email"
              className=" py-4 bg-black/40 pl-4 border-1 text-xs w-[500px]"
              placeholder="Your Email Here"
            />
            <button className="bg-brand p-2.5 text-white text-bold px-8 ml-.5 ">
              <span> SUBSCRIBE</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
