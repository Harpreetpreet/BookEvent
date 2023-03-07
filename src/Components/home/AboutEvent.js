import Image from 'next/image';
import React from 'react';
import CountUp from 'react-countup';
import Subtitle from '../atom/Subtitle';
import Title from '../atom/Title';
import { AiOutlinePlayCircle } from 'react-icons/ai';

const data = [
  {
    id: 1,
    img: '/images/fact-workshop.png',
    num: 47,
    title: 'Workshops',
  },
  {
    id: 2,
    img: '/images/fact-speaker.png',
    num: 139,
    title: 'Speakers',
  },
  {
    id: 3,
    img: '/images/fact-sponsor.png',
    num: 37,
    title: 'Sponsors',
  },
  {
    id: 4,
    img: '/images/fact-country.png',
    num: 88,
    title: 'Countries',
  },
];

const AboutEvent = () => {
  return (
    <div className="container mx-auto py-10 md:px-16 px-8 relative">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
        <div className="relative">
          <Title hasTextBrand title="About the Event" />
          <Subtitle subtitle="How It All Started" />
          <p className="pt-4">
            We are rethoric question ran over her cheek When she reached the
            first hills of the Italic Mountains, she had a last view back on the
            skyline of her hometown Bookmarksgrove, the headline of Alphabet
            Village and the subline of her own road, the Line Lane.
          </p>
          <div className="py-4">
            <i className="border-l-4 border-brand pl-6  ">
              Throw myself down teems with vapour around me, and the meridian
              sun strikes the upper surface of the impenetrable foliage of my
              trees.
            </i>
          </div>

          <p>
            Few stray gleams steal into the inner sanctuary grow familiar with
            the countless indescribable forms, then I feel the presence of the
            Almighty.
          </p>
          <button
            type="button"
            className="p-3 px-6 my-6 bg-brand text-white font-medium text-xm leading-tight rounded shadow-md hover:shadow-lg active:bg-pink-600 active:shadow-lg transition duration-150 ease-in-out"
          >
            KNOW MORE
          </button>
        </div>
        <div>
          <Image
            className="md:absolute -top-20"
            src="/images/intro-video.jpg"
            alt=""
            height={600}
            width={600}
          />
          <div>
            <AiOutlinePlayCircle className="h-24 w-24 text-white relative inset-0 m-auto" />
          </div>
        </div>
      </div>
      <div className=" grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-10 mt-8 ">
        {data.map((item) => (
          <div
            key={item.id}
            className="md:flex mx-auto border-r-2 md:px-10 px-8"
          >
            <Image src={item.img} alt="" height={50} width={70} />
            <div className="md:ml-8 md:pt-0 pt-4">
              <h1 className="font-bold text-4xl">
                <CountUp end={item.num} duration={3} />
              </h1>
              <h3 className="font-medium text-xl text-gray-800">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutEvent;
