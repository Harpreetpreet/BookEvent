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
            option1="Get Access to all Sessions"
            option2="Unlimited Coffee and Foods"
            option3="Meet with Favorite Speakers"
            option4="Access to all Audio and Video Files"
          />
          <PricingCard
            package="Regular"
            price="$310"
            person="/person"
            option1="Get Access to all Sessions"
            option2="Unlimited Coffee and Foods"
            option3="Meet with Favorite Speakers"
            option4="Access to all Audio and Video Files"
          />
          <PricingCard
            package="Last Chance"
            price="$379"
            person="/person"
            option1="Get Access to all Sessions"
            option2="Unlimited Coffee and Foods"
            option3="Meet with Favorite Speakers"
            option4="Access to all Audio and Video Files"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
