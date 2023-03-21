import Image from 'next/image';
import React from 'react';
import IconGroup from './IconGroup';

const TeamMemberCard = (props) => {
  return (
    <div className="group ">
      <div className="container transition hover:-translate-y-4  duration-700 bg-white">
        <div className="relative">
          <a href="#">
            <Image
              className="mx-auto"
              src={props.img}
              alt=""
              height={200}
              width={350}
            />
          </a>
          <div className="md:absolute right-0 left-0 top-0 bottom-0 md:group-hover:bg-black/60 md:group-hover:flex flex-col justify-center hidden ">
            <IconGroup />
          </div>
        </div>
        <div className="p-6 bg-white">
          <h5 className=" text-xl font-bold mb-2 text-brand">{props.title}</h5>
          <p className="text-gray-700  font-medium text-base mb-4">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
