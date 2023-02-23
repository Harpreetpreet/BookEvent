import Image from 'next/image';
import React from 'react';

const EventBlogCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
        <article className="flex flex-col dark:bg-gray-900">
          <Image src={props.img} alt="" height={100} width={100} />

          <div className="flex flex-col flex-1 p-6">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            ></a>
            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
              {props.title}
            </h3>
          </div>
        </article>
      </div>
    </div>
  );
};

export default EventBlogCard;
