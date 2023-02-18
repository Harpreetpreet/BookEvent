import React from 'react';
import Button from '../atom/Button';

const EventProgram = () => {
  return (
    <div className="container mx-auto">
      <div className="items-center">
        <Button button="Day One" />
        <Button button="Day Two" />
        <Button button="Day Three" />
      </div>
    </div>
  );
};

export default EventProgram;
