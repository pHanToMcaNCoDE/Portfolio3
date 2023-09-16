import React from 'react'
import {FiPhoneCall} from 'react-icons/fi'
import {TfiEmail} from 'react-icons/tfi'
import {PiGhost} from 'react-icons/pi'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center max-w-[1250px] w-full mx-auto p-4'>
      <div className='flex items-center'>
            <li className='appearOne mx-2 lg:mx-4 flex flex-col lg:flex-row tracking-wider items-center text-white text-[.6rem] lg:text-[.8rem] font-mono'>
                <FiPhoneCall size={20} className='my-1 lg:mx-2 text-purple-600'/>+(234)8092030535
            </li>
            <li className='appearTwo mx-2 lg:mx-4 flex flex-col lg:flex-row items-center tracking-wider text-white text-[.6rem] lg:text-[.8rem] font-mono'>
                <TfiEmail size={20} className='my-1 lg:mx-2 text-purple-600'/>
                victory.odumeh@gmail.com
            </li>
      </div>
      <div>
        <abbr className='appearThree hidden md:flex lg:flex animate-bounce text-purple-600 text-[2rem]' title='Some Random Logo'>
            <span class="cursor-pointer animate-ping absolute inline-flex h-8 w-8 rounded-full bg-purple-500 opacity-75"></span>
            <a clasName='cursor-pointer relative' href=''><PiGhost/></a>
        </abbr>
      </div>
    </div>
  )
}

export default Navbar
