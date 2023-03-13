import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import Subtitle from '../atom/Subtitle';
import { FiSend } from 'react-icons/fi';

const data = [
  {
    id: '1',
    icon: <IoLocationOutline className=" h-8 w-6" />,
    title: 'Address:',
    subtitle: 'Jurys Inn Brighton Waterfront Hotel, Brighton, London',
  },
  {
    id: '2',
    icon: <AiOutlineMail className=" h-6 w-6" />,
    title: 'Email:',
    subtitle: 'support@example.com',
  },
  {
    id: '3',
    icon: <BsTelephone className=" h-6 w-6" />,
    title: 'Phone:',
    subtitle: '+1(0123) 4567 890, +1(0231) 3421 453',
  },
];
const ContactUs = () => {
  return (
    <div className="container mx-auto pb-14">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        <div className="md:px-16 px-12">
          <div>
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-700">
              This year Eventor is happening at the brand new Jurys Inn Brighton
              Waterfront Hotel, Brighton, London. One of the UKs iconic and
              beautiful location. You will join over 300 attendies in one of the
              best Conference venue in Europe.
            </p>
          </div>
          {data.map((item) => (
            <div key={item.id} className="flex items-center space-y-4 ">
              {' '}
              <div className="flex text-brand ">{item.icon}</div>
              <div className="ml-6">
                {' '}
                <div className="font-bold text-lg"> {item.title}</div>
                <div className="text-gray-700"> {item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
        <div className=" ">
          <div className=" md:px-32 px-14 space-y-8">
            <h2 className="text-2xl font-bold">Contact Now </h2>
            <div className="mx-auto ">
              <div className="mb-6 ">
                <input
                  type="text"
                  placeholder="Name"
                  className="
                w-full
                        bg-transparent
                        py-2

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
                        py-2

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
                        py-2

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
                        py-2

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
                        flex justify-center items-center
                        "
                >
                  <FiSend className="mr-2 " />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
