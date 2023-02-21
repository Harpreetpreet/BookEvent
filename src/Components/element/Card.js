import Image from 'next/image';
import React from 'react';
import IconGroup from './IconGroup';

const Card = (props) => {
  return (
    <div className="group">
      <div className="container transition hover:-translate-y-4  duration-700bg-white">
        <div className="relative">
          <a href="#!">
            <Image
              className="mx-auto"
              src={props.img}
              alt=""
              height={200}
              width={350}
            />
          </a>
          <div className="md:absolute right-0 left-0 top-0 bottom-0 group-hover:bg-black/60 group-hover:flex flex-col justify-center hidden duration-75">
            <IconGroup />
          </div>
        </div>
        <div className="p-6 bg-white">
          <h5 className="text-gray-900 text-xl font-medium mb-2 ">
            {props.title}
          </h5>
          <p className="text-gray-700 text-base mb-4">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
