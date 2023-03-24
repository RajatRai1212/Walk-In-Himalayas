import React from 'react'
import { AiFillPhone,AiOutlineClockCircle} from 'react-icons/ai'
import { BsChatSquareDots} from "react-icons/bs"
 
const Topbar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
        <div className='flex items-center'>
            <BsChatSquareDots size={30} className='pr-2'/>
            <h1>Walk In <br/><span className='font-bold text-green-600'>Himalayas</span>
            </h1> 
        </div>
        <div className="flex">
        <div className='hidden sm:flex items-center px-6 ' >
            <AiOutlineClockCircle size={20} className="mr-2" />
            <p>rajatrai1212@gmail.com</p>
        </div>
        <div className='hidden sm:flex items-center px-6'>
            <AiFillPhone size={20} className="mr-2"/>
            <p>9418725248</p>
        </div>
        <button>Book Now</button>
        </div>
    </div>
  )
}

export default Topbar