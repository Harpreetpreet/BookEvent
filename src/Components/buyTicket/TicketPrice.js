import React from 'react';
import Subtitle from '../atom/Subtitle';
import Title from '../atom/Title';
import Pricing from '../home/Pricing';

const TicketPrice = () => {
  return (
    <div>
      <div className="text-center">
        <Title hasTextBrand title="Join us for the full conference" />
        <Subtitle subtitle="Tickets on Sale Now!" />
      </div>
      <Pricing />
    </div>
  );
};

export default TicketPrice;
