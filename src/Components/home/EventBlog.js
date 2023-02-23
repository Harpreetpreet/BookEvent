import React from 'react';
import Subtitle from '../atom/Subtitle';
import Title from '../atom/Title';

const EventBlog = () => {
  return (
    <div className="bg-slate-200">
      <div className="container">
        <Title hasTextBrand title="Whats going on" />
        <Subtitle subtitle="Event Blog" />
      </div>
    </div>
  );
};

export default EventBlog;
