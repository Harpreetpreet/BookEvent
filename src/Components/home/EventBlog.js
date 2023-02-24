import React from 'react';
import Subtitle from '../atom/Subtitle';
import Title from '../atom/Title';
import EventBlogCard from '../element/EventBlogCard';

const EventBlog = () => {
  return (
    <div className="bg-slate-200 py-16">
      <div className="container mx-auto md:px-14 px-8">
        <div className="text-center pb-14">
          <Title hasTextBrand title="Whats going on" />
          <Subtitle subtitle="Event Blog" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <EventBlogCard
            img="/images/blog1.jpg"
            title="3 Best Practices for Keeping Your Corporate Event Clients Happy"
          />
          <EventBlogCard
            img="/images/blog2.jpg"
            title="3 Best Practices for Keeping Your Corporate Event Clients Happy"
          />
          <EventBlogCard
            img="/images/blog3.jpg"
            title="3 Best Practices for Keeping Your Corporate Event Clients Happy"
          />
        </div>
      </div>
    </div>
  );
};

export default EventBlog;
