import Image from 'next/image';
import React from 'react';
import dayjs from 'dayjs';

const EventDetail = ({ selectedDay }) => {
  return (
    <div className="space-y-3">
      <div className="text-center text-brand text-3xl font-bold">
        {dayjs(selectedDay?.date).format('dddd, D')}th{' '}
        {dayjs(selectedDay?.date).format('MMMM')}
      </div>
      {selectedDay?.programs?.map((item) => (
        <div
          key={item.id}
          className="md:flex gap-4 py-5 px-8 border border-gray-200 rounded md:mx-40 odd:bg-white even:bg-slate-100"
        >
          <div className="flex text-sm font-bold text-gray-700 md:w-2/12">
            {item.startTime}
            {item.endTime}
          </div>
          <div className="md:w-1/12">
            {item.img && (
              <Image
                className="border rounded-lg "
                src={item.img}
                alt={item.heading}
                height={70}
                width={70}
              />
            )}
          </div>
          <div className="md:w-9/12 flex-1 md:pl-6">
            <div className=" text-brand font-bold">{item.heading}</div>
            <div className="text-xl font-bold pb-2">{item.title}</div>
            <p className="text-gray-700">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventDetail;
