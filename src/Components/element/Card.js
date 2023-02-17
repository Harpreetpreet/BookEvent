import Image from 'next/image';
import React from 'react';

const Card = (props) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <Image
              className="rounded-t-lg"
              src={props.img}
              alt=""
              height={100}
              width={100}
            />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {props.title}
            </h5>
            <p className="text-gray-700 text-base mb-4">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
