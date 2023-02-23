import React from 'react';
import Title from '../atom/Title';
import Subtitle from '../atom/Subtitle';
import Button from '../atom/Button';

const EventSponsor = () => {
  return (
    <div className="text-center py-16">
      <Title hasTextBrand title="Supporting Our Project" />
      <Subtitle subtitle="Event Sponsors" />
      <div className="py-10 text-2xl text-bold">
        <h1>Platinum Sponsors</h1>
        <h1>Silver Sponsors</h1>
        <h1>Creative Partners</h1>
      </div>

      <Button active> BECOME OUR SPONSOR</Button>
    </div>
  );
};

export default EventSponsor;
