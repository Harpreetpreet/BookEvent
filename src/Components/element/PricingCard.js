import React from 'react';
import Button from '../atom/Button';
import { BsCheck } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { IoTicketSharp } from 'react-icons/io5';

const PricingCard = (props) => {
  return (
    <div className=" p-10 rounded shadow bg-white mx-6 ">
      <h4 className="text-2xl font-bold ">{props.package}</h4>
      <h2 className="text-4xl font-bold py-6">
        {props.price}
        <span className="text-sm tracking-wide">{props.person}</span>
      </h2>

      <ul className="flex-1 space-y-2">
        <li className="flex items-center space-x-2">
          <BsCheck className="h-6 w-6 text-green-500 " />

          <span>{props.option1}</span>
        </li>
        <li className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="flex-shrink-0 w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>{props.option2}</span>
        </li>
        <li className="flex items-center space-x-2">
          <RxCross2 className="h-5 w-5 text-red-500" />
          <span>{props.option3}</span>
        </li>
        <li className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="flex-shrink-0 w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>{props.option4}</span>
        </li>
      </ul>

      <Button>
        {' '}
        <IoTicketSharp className="mr-1 " />
        JOIN NOW
      </Button>
    </div>
  );
};

export default PricingCard;
