import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineGooglePlus, AiOutlineInstagram } from 'react-icons/ai';
import { TfiYoutube } from 'react-icons/tfi';

const Footer = () => {
  return (
    <div className=" bg-[#101015] py-14  mx-auto ">
      <div className="container  space-y-10 flex flex-col items-center ">
        <div className="">
          <ul className="flex text-white space-x-8 ">
            <li>Home</li>
            <li>Blog</li>
            <li>Tickets</li>
            <li>Faq</li>
            <li>Press</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="">
          <Image src="/images/Logo.png" alt="" height={200} width={200} />
        </div>
        <div className="">
          <ul className="flex space-x-8">
            {' '}
            <li className="relative group">
              {' '}
              <div className="group-hover:rotate-45 -rotate-45  h-9 w-9 border  transition  duration-300"></div>
              <FaFacebookF className="h-4 w-4  text-blue-600 hover:text-white absolute inset-0 m-auto" />
            </li>
            <li className="relative group">
              <div className="group-hover:rotate-45 -rotate-45  h-9 w-9 border  transition  duration-300"></div>
              <BsTwitter className="h-4 w-4 text-blue-400 hover:text-white absolute inset-0 m-auto" />
            </li>
            <li className="relative group">
              <div className="group-hover:rotate-45 -rotate-45   h-9 w-9 border  transition duration-300"></div>
              <AiOutlineGooglePlus className="h-5 w-5 text-brand  hover:text-white absolute inset-0 m-auto" />
            </li>
            <li className="relative group">
              <div className="group-hover:rotate-45 -rotate-45 h-9 w-9 border  transition duration-300"></div>
              <FaLinkedinIn className="h-4 w-4 text-blue-500 hover:text-white absolute inset-0 m-auto" />
            </li>
            <li className="relative group">
              <div className="group-hover:rotate-45 -rotate-45 h-9 w-9 border  transition  duration-300"></div>
              <TfiYoutube className="h-4 w-4 text-red-600 hover:text-white absolute inset-0 m-auto" />
            </li>
            <li className="relative group">
              <div className="group-hover:rotate-45 -rotate-45  h-9 w-9 border  transition  duration-300"></div>
              <AiOutlineInstagram className="h-4 w-4 text-blue-500 hover:text-white absolute inset-0 m-auto" />
            </li>
          </ul>{' '}
        </div>
        <h1 className="text-gray-100">
          Copyright © 2018 BookIt. All Rights Reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
