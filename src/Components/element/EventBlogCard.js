import Image from 'next/image';
import React from 'react';

const EventBlogCard = (props) => {
  return (
    <div>
      <Image src={props.img} alt="" height={400} width={400} />

      <h3 className=" py-4 text-lg font-semibold leading-snug">
        {props.title}
      </h3>
    </div>
  );
};

export default EventBlogCard;
