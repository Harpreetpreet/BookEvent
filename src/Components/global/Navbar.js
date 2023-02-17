import Image from 'next/image';
import React, { useState } from 'react';
import { IoTicketSharp } from 'react-icons/io5';
const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="container mx-auto py-6 ">
      <nav className="flex items-center justify-between ">
        <div className="flex justify-start ">
          <Image
            className="cursor-pointer md:block hidden"
            src="/images/Logo.png"
            alt=""
            height={150}
            width={150}
          />
          <Image
            className="cursor-pointer md:hidden block"
            src="/images/Logo.png"
            alt=""
            height={80}
            width={80}
          />
        </div>
        <div className="md:hidden text-white text-right mr-5">
          <button onClick={() => setActive(!active)}>
            {' '}
            {active ? 'HIDE' : 'SHOW'}
          </button>
        </div>
        <div className="md:block hidden">
          <ul className="flex cursor-pointer justify-center space-x-3 font-semibold text-white">
            <li className=" text-brand hover:bg-brand hover:text-white   rounded duration-500 ease-in-out  p-2 text-sm px-4">
              HOME
            </li>
            <li className=" hover:bg-brand hover:text-white   rounded duration-500 ease-in-out p-2 text-sm px-4">
              ABOUT
            </li>
            <li className=" hover:bg-brand hover:text-white   rounded duration-500 ease-in-out  p-2 text-sm px-4">
              SPEAKERS
            </li>
            <li className=" hover:bg-brand hover:text-white   rounded duration-500 ease-in-out  p-2 text-sm px-4">
              SCHEDULE
            </li>
            <li className=" hover:bg-brand hover:text-white   rounded duration-500 ease-in-out  p-2 text-sm px-4">
              BLOG
            </li>
            <li className=" hover:bg-brand hover:text-white   rounded duration-500 ease-in-out  p-2 text-sm px-4">
              CONTACT
            </li>
            <li className="flex hover:bg-brand hover:text-white bg-primary  rounded duration-500 ease-in-out  p-2 text-sm px-4 items-center ">
              <IoTicketSharp
                className="mr-1
              "
              />
              TICKETS
            </li>
          </ul>
        </div>
      </nav>
      {active && (
        <ul className="md:hidden mt-3 bg-white/30 py-6 text-center cursor-pointer justify-center space-y-3 font-semibold text-white">
          <li className=" text-brand hover:bg-brand hover:text-white   rounded duration-500 ease-in-out  p-2 text-sm px-4">
            HOME
          </li>
          <li className=" hover:bg-brand hover:text-white   rounded duration-500 ease-in-out p-2 text-sm px-4">
            ABOUT
          </li>
          <li className=" hover:bg-brand hover:text-white   rounded duration-500 ease-in-out  p-2 text-sm px-4">
            SPEAKERS
          </li>
          <li className=" hover:bg-brand hover:text-white   rounded duration-500 ease-in-out  p-2 text-sm px-4">
            SCHEDULE
          </li>
          <li className=" hover:bg-brand hover:text-white   rounded duration-500 ease-in-out  p-2 text-sm px-4">
            BLOG
          </li>
          <li className=" hover:bg-brand hover:text-white   rounded duration-500 ease-in-out  p-2 text-sm px-4">
            CONTACT
          </li>
          <li className="flex w-max mx-auto hover:bg-brand hover:text-white bg-primary  rounded duration-500 ease-in-out  p-2 text-sm px-4 items-center ">
            <IoTicketSharp
              className="mr-1
              "
            />
            TICKETS
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
