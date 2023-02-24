import React from 'react';

const EventDetail = ({ selectedDay }) => {
  return (
    <div>
      <div className="text-center text-brand text-3xl font-bold">
        {selectedDay?.date}
      </div>
      {selectedDay?.programs?.map((item) => (
        <div key={item.id} className=" flex">
          <div className="">
            {item.startTime}
            {item.endTime}
          </div>
          <div>
            <div>{item.image}</div>
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
