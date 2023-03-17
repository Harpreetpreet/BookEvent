import React from 'react';
import Button from '../atom/Button';
import { BsCheck } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { IoTicketSharp } from 'react-icons/io5';

const PricingCard = ({ item }) => {
  return (
    <div className="container mx-auto px-8">
      <div className=" p-10 rounded shadow-2xl bg-slate-100 hover:bg-gradient-to-r from-pink-600 via-indigo-500 to-purple-500 py-14 duration-500 ease-in-out">
        <h4 className="text-2xl font-bold ">{item.name}</h4>
        <h2 className="text-4xl font-bold py-6">
          ${item.price}
          <span className="text-sm tracking-wide">/person</span>
        </h2>

        <ul className="flex-1 space-y-2">
          {item.features?.map((feature) => (
            <li key={feature.id} className="flex items-center space-x-2">
              {feature.isAvailable ? (
                <BsCheck className="h-6 w-6 text-green-500 " />
              ) : (
                <RxCross2 className="h-5 w-5 text-red-500" />
              )}
              <span className="text-sm">{feature.label}</span>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <Button>
            <span className="flex items-center">
              <IoTicketSharp className="mr-1 " />
              JOIN NOW
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
