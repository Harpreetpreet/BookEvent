import React from 'react';
import Navbar from '../global/Navbar';

const SpeakerBanner = () => {
  return (
    <div>
      <div className='bg-[url("/images/banner4.jpg")] bg-no-repeat  bg-cover'>
        <Navbar />
        <h1 className="text-center text-white font-bold text-6xl py-8 pb-40">
          Speakers
        </h1>
      </div>
    </div>
  );
};

export default SpeakerBanner;
