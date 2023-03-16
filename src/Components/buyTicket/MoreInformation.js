import React from 'react';
import Button from '../atom/Button';
import { AiOutlineFilePdf } from 'react-icons/ai';

const MoreInformation = () => {
  return (
    <div className='bg-[url("/images/banner1.jpg")] bg-no-repeat bg-cover bg-fixed py-28'>
      <div className="text-center space-y-3 text-white">
        <h1 className="text-4xl font-bold">Need to Convince the Boss?</h1>
        <p className="mx-auto max-w-screen-md">
          Group discounts are available for parties of five large. If you are
          interested, contact loura@bookItconference.com for more information.
        </p>
        <Button active>
          <span className="flex items-center">
            <AiOutlineFilePdf className="mr-1" /> Download Our PDF
          </span>
        </Button>
      </div>
    </div>
  );
};

export default MoreInformation;
