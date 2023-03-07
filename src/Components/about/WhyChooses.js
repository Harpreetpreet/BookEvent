import Image from 'next/image';
import React from 'react';
import Subtitle from '../atom/Subtitle';
import Title from './../atom/Title';

const chooseData = [
  {
    id: 1,
    img: '/images/keynotes.png',
    heading: 'Inspiring Keynotes',
    description:
      'Tofu mixtape twee, assumenda quinoa flexitarian aesthetic artisan vinyl pug. Chambray et Carles Thundercats cardigan actually.',
  },
  {
    id: 2,
    img: '/images/reinvent.png',
    heading: 'Reinventing Experiences',
    description:
      'Tofu mixtape twee, assumenda quinoa flexitarian aesthetic artisan vinyl pug. Chambray et Carles Thundercats cardigan actually.',
  },
  {
    id: 3,
    img: '/images/food.png',
    heading: 'Fun, Friends & Food',
    description:
      'Tofu mixtape twee, assumenda quinoa flexitarian aesthetic artisan vinyl pug. Chambray et Carles Thundercats cardigan actually.',
  },
];

const WhyChooses = () => {
  return (
    <div className="container mx-auto py-28 md:px-12 px-8">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="space-y-2">
          <Title hasTextBrand title="Who Should Attend" />
          <Subtitle subtitle="What to Expect from BookIt" />
          <div className="space-y-4 text-gray-700 pt-4">
            <p>
              We are rethoric question ran over her cheek When she reached the
              first hills of the Italic Mountains, she had a last view back on
              the skyline of her hometown Bookmarksgrove, the headline of
              Alphabet Village and the subline of her own road, the Line Lane.
            </p>
            <div className="border-brand border-l-4 pl-2 font-medium">
              <i>
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
          </div>
        </div>
        <div>
          {chooseData.map((item) => (
            <div key={item.id} className="flex items-center gap-8">
              <div>
                <Image
                  className="w-11/12"
                  src={item.img}
                  alt=""
                  width={70}
                  height={70}
                />
              </div>{' '}
              <div className="w-9/12 space-y-2">
                <h1 className="font-bold text-2xl text-gray-900">
                  {item.heading}
                </h1>
                <p> {item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooses;
