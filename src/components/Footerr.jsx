import React from 'react';
import { BsChatSquareDots } from 'react-icons/bs';

const Footerr = () => {
  return (
    <div className='max-w-[1140px] w-full py-8 m-auto border-t-4'>
      <div className='flex items-center m-auto justify-center'>
        <BsChatSquareDots size={30} className=' mr-2' />
        <h1 className='text-xl font-bold text-gray-700'>Walk In <span className='text-green-600'>Himalayas</span></h1>
      </div>
    </div>
  );
};

export default Footerr;