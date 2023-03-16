import React, { useState } from 'react';
import PricingCard from '../element/PricingCard';

const pricingData = [
  {
    id: 1,
    name: 'Early Bird',
    price: 200,
    features: [
      { id: 1, label: 'Get Access to all Sessions', isAvailable: true },
      { id: 2, label: 'Unlimited Coffee and Foods', isAvailable: true },
      { id: 3, label: 'Meet with Favorite Speakers' },
      { id: 4, label: 'Access to all Audio and Video Files' },
    ],
  },
  {
    id: 2,
    name: 'Regular',
    price: 310,
    features: [
      { id: 1, label: 'Get Access to all Sessions', isAvailable: true },
      { id: 2, label: 'Unlimited Coffee and Foods', isAvailable: true },
      { id: 3, label: 'Meet with Favorite Speakers', isAvailable: true },
      { id: 4, label: 'Access to all Audio and Video Files' },
    ],
  },
  {
    id: 3,
    name: 'Last Chance',
    price: 379,
    features: [
      { id: 1, label: 'Get Access to all Sessions', isAvailable: true },
      { id: 2, label: 'Unlimited Coffee and Foods', isAvailable: true },
      { id: 3, label: 'Meet with Favorite Speakers', isAvailable: true },
      {
        id: 4,
        label: 'Access to all Audio and Video Files',
        isAvailable: true,
      },
    ],
  },
];

const Pricing = ({ isBackgroundAvailable }) => {
  // const [isActive, setIsActive] = useState('regular');
  return (
    <div
      className={` ${
        isBackgroundAvailable
          ? 'bg-[url(/images/parallax2.jpg)] bg-fixed bg-no-repeat bg-cover py-24'
          : 'bg-white'
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-4 ">
          {pricingData.map((item) => (
            <div key={item.id}>
              <PricingCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
