import React, { useState } from 'react';
import Button from '../atom/Button';
import Title from '../atom/Title';
import EventDetail from './EventDetail';
import Subtitle from './../atom/Subtitle';

const EventProgram = () => {
  const [activeDay, setActiveDay] = useState('dayOne');
  return (
    <div className="container mx-auto py-24">
      <div className="text-center pb-10">
        <Title hasTextBrand title="Don't Miss a Thing" />
        <Subtitle subtitle="Event Programme" />
      </div>
      <div className="flex justify-center gap-2">
        <div>
          <Button
            active={activeDay === 'dayOne'}
            onClick={() => setActiveDay('dayOne')}
          >
            Day One
          </Button>
        </div>
        <div>
          <Button
            active={activeDay === 'dayTwo'}
            onClick={() => setActiveDay('dayTwo')}
          >
            Day Two
          </Button>
        </div>
        <div>
          <Button
            active={activeDay === 'dayThree'}
            onClick={() => setActiveDay('dayThree')}
          >
            Day Three
          </Button>
        </div>
      </div>
      <div className="tab-content" id="tabs-tabContentFill">
        <EventDetail
          heading="Sunday, 7th March"
          title="Registration"
          subtitle="Pick up your name badge and goodie bag"
        />
      </div>
    </div>
  );
};

export default EventProgram;
