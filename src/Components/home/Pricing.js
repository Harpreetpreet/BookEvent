import React, { useState } from 'react';
import PricingCard from '../element/PricingCard';

const pricingData = [{}];

const Pricing = () => {
  const [isActive, setIsActive] = useState('regular');
  return (
    <div className="bg-[url(/images/parallax2.jpg)] bg-fixed bg-no-repeat bg-cover py-24">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1 ">
          <PricingCard
            package="Early Bird"
            price="$219"
            person="/person"
            option="Get Access to all Sessions"
          />
          <PricingCard
            package="Regular"
            price="$219"
            person="/person"
            option="Get Access to all Sessions"
          />
          <PricingCard
            package="Last Chance"
            price="$219"
            person="/person"
            option="Get Access to all Sessions"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
