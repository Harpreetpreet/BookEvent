import React from 'react';
import PricingCard from '../element/PricingCard';

const pricingData = [{}];

const Pricing = () => {
  return (
    <div className="bg-[url(/images/parallax2.jpg)] bg-fixed bg-no-repeat">
      <section class="py-20 dark:bg-gray-800 dark:text-gray-100">
        <div class="container px-4 mx-auto">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <PricingCard
              package="Early Bird"
              price="$219"
              month="/person"
              option="Get Access to all Sessions"
            />
            <PricingCard
              package="Regular"
              price="$219"
              month="/person"
              option="Get Access to all Sessions"
            />
            <PricingCard
              package="Last Chance"
              price="$219"
              month="/person"
              option="Get Access to all Sessions"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
