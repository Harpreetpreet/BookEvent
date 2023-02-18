import Image from 'next/image';
import React from 'react';

const Card = (props) => {
  return (
    <div className="">
      <div className="transition hover:-translate-y-4  duration-700 bg-white">
        <a href="#!">
          <Image className="" src={props.img} alt="" height={200} width={350} />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {props.title}
          </h5>
          <p className="text-gray-700 text-base mb-4">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
