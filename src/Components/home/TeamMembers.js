import React from 'react';
import Subtitle from '../atom/Subtitle';
import TeamMemberCard from '../element/TeamMemberCard';

import Title from './../atom/Title';

const cardData = [
  {
    id: 1,
    img: '/images/speaker1.jpg',
    title: 'Edward C. Horner',
    description: 'Founder, Textlab',
  },
  {
    id: 2,
    img: '/images/speaker2.jpg',
    title: 'Yue Ying Yüan',
    description: 'Avdei Ignatyev',
  },
  {
    id: 3,
    img: '/images/speaker3.jpg',
    title: 'Laura Bryant',
    description: 'CCO, Buena Vista',
  },
  {
    id: 4,
    img: '/images/speaker4.jpg',
    title: 'Avdei Ignatyev',
    description: 'Co-Founder, Newhair Corp.',
  },
  {
    id: 5,
    img: '/images/speaker5.jpg',
    title: 'Summer Cross',
    description: 'Chairman, Access Ltd.',
  },
  {
    id: 6,
    img: '/images/speaker6.jpg',
    title: 'Oscar Watkins',
    description: 'CMO, Circus World',
  },
  {
    id: 7,
    img: '/images/speaker7.jpg',
    title: 'Eden Nivison',
    description: 'EVP, Jeans Unlimited',
  },
  {
    id: 8,
    img: '/images/speaker8.jpg',
    title: 'Davi Azevedo',
    description: 'Architect, Piccolo Mondo',
  },
];

const TeamMembers = () => {
  return (
    <div className=" bg-gradient-to-r from-pink-500  via-pink-400 to-indigo-400 mt-10 py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center pb-16">
          <Title title="Revolutionizing the World" />
          <Subtitle hasTextWhite subtitle="Visionary Speakers" />
        </div>
        <div className="relative grid md:grid-cols-4 grid-cols-1 gap-8">
          {cardData.map((item) => (
            <div key={item.id}>
              <TeamMemberCard
                img={item.img}
                title={item.title}
                description={item.description}
              />{' '}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
