import Image from 'next/image';
import React from 'react';

const EventDetail = ({ selectedDay }) => {
  return (
    <div>
      <div className="text-center text-brand text-3xl font-bold">
        {selectedDay?.date}
      </div>
      {selectedDay?.programs?.map((item) => (
        <div key={item.id} className="flex border border-gray-200 rounded">
          <div className="">
            {item.startTime}
            {item.endTime}
          </div>
          <div>
            <Image
              src={item.img}
              alt=""
              height={100}
              width={100}
              // className="h-10 w-10"
            />
            <div>{item.heading}</div>
            <div>{item.title}</div>
            <div>{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventDetail;
