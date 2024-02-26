import React from 'react'
import {FiPhoneCall} from 'react-icons/fi'
import {TfiEmail} from 'react-icons/tfi'
import {PiGhost} from 'react-icons/pi'
import './navbar.css'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import vick from '../../victory.png'

const Navbar = () => {
  return (
    <nav className='max-w-[1300px] mx-auto p-4'>
      <div className='mx-auto flex justify-between items-center '>
        <div>
          <abbr className='appearThree animate-bounce text-purple-600 text-[2rem]' title='Some Random Logo'>
            <Link to='/home'><span class="cursor-pointer animate-ping absolute inline-flex h-8 w-8 rounded-full bg-purple-500 opacity-75"></span></Link>
              <img className='w-8 h-8 object-cover rounded-full' src={vick} alt='Victory Odumeh'></img>
          </abbr>
        </div>
        <div className='flex items-center'>
              <li className='appearTwo mx-2 lg:mx-4 flex flex-col md:flex-row md:gap-x-2 lg:flex-row items-center tracking-wider text-white text-[.6rem] lg:text-[.8rem] font-mono'>
                  <TfiEmail size={20} className='my-1 lg:mx-2 text-purple-600'/>
                  vodumeh@gmail.com
              </li>
              <Link to='/home' className='appearTwo mx-2 lg:mx-4 flex flex-col md:flex-row lg:flex-row gap-x-2 items-center tracking-wider text-white text-[.6rem] lg:text-[.8rem] font-mono'>
                  <IoIosArrowBack size={20} className='my-1 lg:mx-2 text-purple-600'/>
                  Back
              </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
