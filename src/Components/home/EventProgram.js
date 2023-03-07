import React, { useState } from 'react';
import Button from '../atom/Button';
import Title from '../atom/Title';
import EventDetail from './EventDetail';
import Subtitle from './../atom/Subtitle';

const eventData = {
  id: 1,
  days: [
    {
      id: 1,
      dayNumber: 1,
      date: '07-03-2022',
      programs: [
        {
          id: 1,
          startTime: '9:30',
          endTime: '-10:00',
          heading: '',
          title: 'Registration',
          description: 'Pick up your name badge and goodie bag',
          img: '',
        },
        {
          id: 2,
          startTime: '10:30',
          endTime: '-11:15AM',
          heading: 'Edward C. Horner',
          title: 'Reinventing Experiences to All',
          description:
            'Throw myself down teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable.',
          img: '/images/speaker1.jpg',
        },
        {
          id: 3,
          startTime: '11:15AM',
          endTime: '-13:15PM',
          heading: 'Summer Cross',
          title: 'Human Centered Design',
          description:
            'Minim Austin 3 wolf moon scenester aesthetic, umami odio pariatur bitters. Pop-up occaecat taxidermy street art, tattooed beard literally.',
          img: '/images/speaker5.jpg',
        },
        {
          id: 4,
          startTime: '9:30',
          endTime: '10:00',
          heading: '',
          title: 'Lunch',
          description: 'Five star buffet for everybody.',
          img: '',
        },
        {
          id: 5,
          startTime: '9:30',
          endTime: '10:00',
          heading: 'Laura Bryant',
          title: 'A frontier for designers: cultures of creativity',
          description:
            'Plaid fashion axe semiotics skateboard, try-hard food truck aesthetic biodiesel exercitation. Accusamus VHS Wes Anderson Banksy food truck vero.',
          img: '/images/speaker3.jpg',
        },
      ],
    },
    {
      id: 2,
      dayNumber: 2,
      date: '08-03-2022',
      programs: [
        {
          id: 1,
          startTime: '9:30',
          endTime: '10:00',
          heading: 'Avdei Ignatyev',
          title: 'Getting Started With User-Centered Content',
          description:
            'Throw myself down teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable.',
          img: '/images/speaker4.jpg',
        },
        {
          id: 2,
          startTime: '9:30',
          endTime: '10:00',
          heading: 'Eden Nivison',
          title: 'Content Measurement and Analytics',
          description:
            'Minim Austin 3 wolf moon scenester aesthetic, umami odio pariatur bitters. Pop-up occaecat taxidermy street art, tattooed beard literally.',
          img: '/images/speaker7.jpg',
        },
        {
          id: 3,
          startTime: '9:30',
          endTime: '10:00',
          heading: '',
          title: 'Lunch',
          description: 'Five star buffet for everybody.',
          img: '',
        },
        {
          id: 4,
          startTime: '9:30',
          endTime: '10:00',
          heading: 'Davi Azevedo',
          title: 'Not Perfect, Always Better: A Story of Inclusion',
          description:
            'Plaid fashion axe semiotics skateboard, try-hard food truck aesthetic biodiesel exercitation. Accusamus VHS Wes Anderson Banksy food truck vero.',
          img: '/images/speaker8.jpg',
        },
      ],
    },
    {
      id: 3,
      dayNumber: 3,
      date: '09-03-2022',
      programs: [
        {
          id: 1,
          startTime: '9:30',
          endTime: '10:00',
          heading: 'Yue Ying Yüan',
          title: 'How Silos Learn: Working in the Idea Factory',
          description:
            'Throw myself down teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable.',
          img: '/images/speaker2.jpg',
        },
        {
          id: 2,
          startTime: '9:30',
          endTime: '10:00',
          heading: 'Laura Bryant',
          title: 'Empathy Behind the Algorithms',
          description:
            'Minim Austin 3 wolf moon scenester aesthetic, umami odio pariatur bitters. Pop-up occaecat taxidermy street art, tattooed beard literally.',
          img: '/images/speaker3.jpg',
        },
        {
          id: 3,
          startTime: '9:30',
          endTime: '10:00',
          heading: '',
          title: 'Lunch',
          description: 'Five star buffet for everybody.',
          img: '',
        },
        {
          id: 4,
          startTime: '9:30',
          endTime: '10:00',
          heading: 'Oscar Watkins',
          title: 'Adaptive Content, Context, and Controversy',
          description:
            'Plaid fashion axe semiotics skateboard, try-hard food truck aesthetic biodiesel exercitation. Accusamus VHS Wes Anderson Banksy food truck vero.',
          img: '/images/speaker6.jpg',
        },
        {
          id: 5,
          startTime: '9:30',
          endTime: '10:00',
          heading: '',
          title: 'After Party',
          description: 'Stick around and enjoy a dazzling after work.',
          img: '',
        },
      ],
    },
  ],
};

const EventProgram = () => {
  const [selectedDay, setSelectedDay] = useState(eventData.days[0]);
  return (
    <div className="container mx-auto py-24">
      <div className="text-center pb-10">
        <Title hasTextBrand title="Don't Miss a Thing" />
        <Subtitle subtitle="Event Programme" />
      </div>
      <div className="flex justify-center gap-2">
        <div>
          <Button
            active={selectedDay?.dayNumber === 1}
            onClick={() => {
              setSelectedDay(eventData.days[0]);
            }}
          >
            Day One
          </Button>
        </div>
        <div>
          <Button
            active={selectedDay?.dayNumber === 2}
            onClick={() => {
              setSelectedDay(eventData.days[1]);
            }}
          >
            Day Two
          </Button>
        </div>
        <div>
          <Button
            active={selectedDay?.dayNumber === 3}
            onClick={() => {
              setSelectedDay(eventData.days[2]);
            }}
          >
            Day Three
          </Button>
        </div>
      </div>
      <div className="tab-content" id="tabs-tabContentFill">
        <EventDetail selectedDay={selectedDay} />
      </div>
    </div>
  );
};

export default EventProgram;
