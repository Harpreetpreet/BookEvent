import React from 'react';

const Location = () => {
  return (
    <div className="  py-20">
      <div className="container mx-auto md:px-20 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.581834972836!2d75.560383815473!3d31.370516661664414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51bb415a9707%3A0xbbe5446476710bbe!2sZeiq!5e0!3m2!1sen!2sin!4v1677742079934!5m2!1sen!2sin"
          width="1100"
          height="600"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
