import React from 'react';
import Subtitle from '../atom/Subtitle';
import Title from '../atom/Title';
import EventBlogCard from '../element/EventBlogCard';
import AOS from 'aos';

AOS.init();

const EventBlog = () => {
  return (
    <div className="bg-slate-200 py-16">
      <div className="container mx-auto md:px-14 px-8">
        <div className="text-center pb-14">
          <Title hasTextBrand title="Whats going on" />
          <Subtitle subtitle="Event Blog" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div
            data-aos="fade-right"
            className="hover:text-brand cursor-pointer duration-500 ease-in-out "
          >
            <EventBlogCard
              img="/images/blog1.jpg"
              title="3 Best Practices for Keeping Your Corporate Event Clients Happy"
            />
          </div>
          <div
            data-aos="fade-up"
            className="hover:text-brand cursor-pointer duration-500 ease-in-out "
          >
            <EventBlogCard
              img="/images/blog2.jpg"
              title="3 Best Practices for Keeping Your Corporate Event Clients Happy"
            />
          </div>
          <div
            data-aos="fade-left"
            className="hover:text-brand cursor-pointer duration-500 ease-in-out "
          >
            <EventBlogCard
              img="/images/blog3.jpg"
              title="3 Best Practices for Keeping Your Corporate Event Clients Happy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBlog;
