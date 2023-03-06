import Image from 'next/image';
import React from 'react';

const EventDetail = ({ selectedDay }) => {
  return (
    <div className="space-y-3">
      <div className="text-center text-brand text-3xl font-bold">
        {selectedDay?.date}
      </div>
      {selectedDay?.programs?.map((item) => (
        <div
          key={item.id}
          className="flex border border-gray-200 rounded md:mx-40 odd:bg-white even:bg-slate-100"
        >
          <div className="flex p-8 -mt-2 text-xs font-bold">
            {item.startTime}
            {item.endTime}
          </div>
          <div className=" p-8 ">
            <Image
              className="border rounded-lg "
              src={item.img}
              alt=""
              height={100}
              width={100}
            />
          </div>
          <div className="p-8 -mt-4 px-14">
            <div className=" text-brand font-bold">{item.heading}</div>
            <div className="text-xl font-bold">{item.title}</div>
            <div>{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventDetail;
