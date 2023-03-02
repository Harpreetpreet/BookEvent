import React from 'react';
import Subtitle from '../atom/Subtitle';
import { FiSend } from 'react-icons/fi';

const ContactForm = () => {
  return (
    <div className="grid grid-cols-2 gap-0">
      <div className="bg-[#1c1c24] ">
        <div className="mt-10 ">
          <Subtitle hasTextWhite subtitle="Contact Form" />
          <div className="mx-auto px-24">
            <div className="mb-6 ">
              <input
                type="text"
                placeholder="Name"
                className="
                w-full
                        bg-transparent
                        py-3

                        border-b border-slate-400
                        "
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className="
                        w-full
                        bg-transparent
                        py-3

                        border-b border-slate-400

                        "
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Phone"
                className="
                        w-full
                        bg-transparent
                        py-3

                        text-body-color text-base
                        border-b border-slate-400
                        "
              />
            </div>
            <div className="mb-6">
              <textarea
                rows="6"
                placeholder="Your Message"
                className="
                        w-full
                        bg-transparent
                        py-3

                        text-body-color text-base
                        resize-none
                        border-b border-slate-400
                        "
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="
                        w-full
                        text-white
                        font-bold
                        bg-brand
                        rounded
                        p-3
                        transition
items-center
                        "
              >
                <FiSend className="items-center" />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.581834972836!2d75.560383815473!3d31.370516661664414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51bb415a9707%3A0xbbe5446476710bbe!2sZeiq!5e0!3m2!1sen!2sin!4v1677742079934!5m2!1sen!2sin"
          width="1000"
          height="650"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
