import React from 'react';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { GrLinkedinOption, GrFacebookOption } from 'react-icons/gr';

const IconGroup = () => {
  return (
    <div>
      <ul className="flex items-center justify-center ">
        <div>
          <li>
            <AiOutlineInstagram className="h-12 w-12  hover:bg-secondary text-white p-4  bg-red-500" />
          </li>
        </div>
        <div>
          <li>
            <GrLinkedinOption className="h-12 w-12  hover:bg-secondary text-white p-4 bg-blue-600 " />
          </li>
        </div>
      </ul>
      <ul className="flex items-center justify-center">
        <div>
          <li>
            <GrFacebookOption className="h-12 w-12 hover:bg-secondary text-white p-4 bg-blue-400" />
          </li>
        </div>
        <div>
          <li>
            <AiOutlineTwitter className="h-12 w-12 hover:bg-secondary text-white p-4 bg-blue-500" />
          </li>
        </div>
      </ul>
    </div>
  );
};

export default IconGroup;
