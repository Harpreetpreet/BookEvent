import Image from 'next/image';
import React from 'react';
import Title from '../atom/Title';
import Subtitle from './../atom/Subtitle';
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import ReactMarkdown from 'react-markdown';

const venueData = [
  {
    id: '1',
    icon: <IoLocationOutline className=" h-8 w-6" />,
    title: 'Address:',
    subtitle: 'Jurys Inn Brighton Waterfront Hotel, Brighton, London',
  },
  {
    id: '2',
    icon: <AiOutlineMail className=" h-6 w-6" />,
    title: 'Email:',
    subtitle: 'support@example.com',
  },
  {
    id: '3',
    icon: <BsTelephone className=" h-6 w-6" />,
    title: 'Phone:',
    subtitle: '+1(0123) 4567 890, +1(0231) 3421 453',
  },
];

const venueData2 = [
  {
    id: '1',
    img: '/images/transport.png',
    title: 'Transport',
    description: `Tofu mixtape twee, assumenda quinoa **flexitarian** aesthetic artisan vinyl pug. Chambray et Carles cardigan actually.`,
    readMore: 'Read More>',
  },
  {
    id: '2',
    img: '/images/hotel.png',
    title: 'Hotels',
    description:
      'Rethoric question, assumenda quinoa **percianto** aesthetic artisan vinyl pug. Chambray et Thundercats **Grand Hotel** actually.',
    readMore: 'Read More>',
  },
  {
    id: '3',
    img: '/images/food.png',
    title: 'Food',
    description:
      'Incididunt ut labore quinoa **cardigan** aesthetic artisan vinyl pug. Chambray et Carles Thundercats **Buffet** assumenda.',
    readMore: 'Read More>',
  },
];

const VenueDetail = () => {
  return (
    <div className="container mx-auto md:py-24 bg-transparent">
      <div className="text-center">
        <Title hasTextBrand title="Where to find us" />
        <Subtitle subtitle="Venue and Info" />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-16 md:px-16 px-12">
        <div>
          <div className="">
            <h1 className="text-2xl font-bold mb-4">Venue Details</h1>
            <p className="text-gray-700">
              This year Eventor is happening at the brand new Jurys Inn Brighton
              Waterfront Hotel, Brighton, London. One of the UKs iconic and
              beautiful location. You will join over 300 attendies in one of the
              best Conference venue in Europe.
            </p>
          </div>
          {venueData.map((item) => (
            <div key={item.id} className="flex items-center space-y-4 ">
              {' '}
              <div className="flex text-brand ">{item.icon}</div>
              <div className="ml-6">
                {' '}
                <div className="font-bold text-lg"> {item.title}</div>
                <div className="text-gray-700"> {item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Image src="/images/venue-img.jpg" alt="" height={550} width={600} />
        </div>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 mt-16">
        {venueData2.map((item2) => (
          <div key={item2.id} className="mx-auto text-center px-6 py-8">
            <div className="mx-auto flex justify-center mb-6">
              <Image src={item2.img} alt="" height={70} width={70} />
            </div>
            <h1 className="text-3xl font-bold"> {item2.title}</h1>
            <div className="text-gray-700 p-4 prose  prose-strong:text-brand hover:prose-strong:text-black duration-500 ease prose-strong:cursor-pointer">
              <ReactMarkdown>{item2.description}</ReactMarkdown>
            </div>
            <a className="cursor-pointer items-center text-brand hover:text-black duration:500 ease-in-out">
              {item2.readMore}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenueDetail;
