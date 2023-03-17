import Image from 'next/image';
import React, { useState } from 'react';
import { IoTicketSharp } from 'react-icons/io5';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import Link from 'next/link';

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="container mx-auto py-6">
      <nav className="flex items-center justify-between  ">
        <div className="flex justify-start ">
          {' '}
          <Link href="/">
            <Image
              className="cursor-pointer md:block hidden"
              src="/images/Logo.png"
              alt=""
              height={150}
              width={150}
            />
          </Link>
          <Image
            className="cursor-pointer md:hidden block pl-4"
            src="/images/Logo.png"
            alt=""
            height={80}
            width={80}
          />
        </div>
        <div className="md:hidden text-white text-right mr-5">
          <button onClick={() => setActive(!active)}>
            {' '}
            {active ? (
              <RxCross2 className="h-6 w-6" />
            ) : (
              <AiOutlineMenuFold className="h-6 w-6" />
            )}
          </button>
        </div>
        <div className="md:block hidden ">
          <ul className="flex cursor-pointer justify-center space-x-3 font-semibold text-white ">
            <Link
              href="/"
              className=" text-brand hover:bg-brand hover:text-white   rounded duration-500 ease-in-out  p-2 text-sm px-4"
            >
              HOME
            </Link>
            <Link
              href="about"
              className=" hover:bg-brand hover:text-white   rounded duration-500 ease-in-out p-2 text-sm px-4"
            >
              ABOUT
            </Link>
            <Link
              href="speaker"
              className=" hover:bg-brand hover:text-white   rounded duration-500 ease-in-out  p-2 text-sm px-4"
            >
              SPEAKERS
            </Link>
            <Link
              href=""
              className=" hover:bg-brand hover:text-white   rounded duration-500 ease-in-out  p-2 text-sm px-4"
            >
              SCHEDULE
            </Link>
            <Link
              href=""
              className=" hover:bg-brand hover:text-white   rounded duration-500 ease-in-out  p-2 text-sm px-4"
            >
              BLOG
            </Link>
            <Link
              href="contact"
              className=" hover:bg-brand hover:text-white   rounded duration-500 ease-in-out  p-2 text-sm px-4"
            >
              CONTACT
            </Link>
            <Link
              href="/ticket"
              className="flex hover:bg-brand hover:text-white bg-primary  rounded duration-500 ease-in-out  p-2 text-sm px-4 items-center "
            >
              <IoTicketSharp
                className="mr-1
              "
              />
              TICKETS
            </Link>
          </ul>
        </div>
      </nav>
      {active && (
        <ul className="md:hidden mt-3 bg-white/30 py-6 text-center cursor-pointer justify-center space-y-3 font-semibold text-white">
          <Link href="/">
            {' '}
            <li className=" text-brand hover:bg-brand hover:text-white   rounded duration-500 ease-in-out  p-2 text-sm px-4">
              HOME
            </li>
          </Link>
          <Link href="/about">
            <li className=" hover:bg-brand hover:text-white   rounded duration-500 ease-in-out p-2 text-sm px-4">
              ABOUT
            </li>
          </Link>
          <Link href="/speaker">
            <li className=" hover:bg-brand hover:text-white   rounded duration-500 ease-in-out  p-2 text-sm px-4">
              SPEAKERS
            </li>
          </Link>
          <Link href="/">
            <li className=" hover:bg-brand hover:text-white   rounded duration-500 ease-in-out  p-2 text-sm px-4">
              SCHEDULE
            </li>
          </Link>
          <Link href="/">
            <li className=" hover:bg-brand hover:text-white   rounded duration-500 ease-in-out  p-2 text-sm px-4">
              BLOG
            </li>
          </Link>
          <Link href="/contact">
            <li className=" hover:bg-brand hover:text-white   rounded duration-500 ease-in-out  p-2 text-sm px-4">
              CONTACT
            </li>
          </Link>
          <Link href="/ticket">
            <li className="flex w-max mx-auto hover:bg-brand hover:text-white bg-primary  rounded duration-500 ease-in-out  p-2 text-sm px-4 items-center ">
              <IoTicketSharp
                className="mr-1
              "
              />
              TICKETS
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
