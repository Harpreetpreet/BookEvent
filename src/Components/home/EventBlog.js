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
          <div data-aos="fade-right">
            <EventBlogCard
              className="relative"
              img="/images/blog1.jpg"
              title="3 Best Practices for Keeping Your Corporate Event Clients Happy"
              date="29"
              month="Nov"
            />
          </div>
          <div data-aos="fade-up">
            <EventBlogCard
              img="/images/blog2.jpg"
              title="3 Best Practices for Keeping Your Corporate Event Clients Happy"
              date="17"
              month="Aug"
            />
          </div>
          <div data-aos="fade-left">
            <EventBlogCard
              img="/images/blog3.jpg"
              title="3 Best Practices for Keeping Your Corporate Event Clients Happy"
              date="18"
              month="Sep"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBlog;
