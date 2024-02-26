import React from 'react'
import './footer.css'
import SocialLinks from '../Social-Links/SocialLinks'
import { TfiEmail } from 'react-icons/tfi'

const Footer = () => {
  return (
    <footer className='max-w-[1300px] p-2 mt-3'>

      <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center mx-auto md:py-0 lg:py-0 gap-y-3'>
        <h1 className='appear text-zinc-400 tracking-wider text-center '>@ <a className='hover:text-purple-500 duration-300 font-mono' href=''>Victory Odumeh</a> 2023</h1>

        <p className='appearTwo mx-2 lg:mx-4 flex flex-col md:flex-row lg:flex-row items-center tracking-wider md:gap-x-2 text-white text-[.6rem] lg:text-[.8rem] font-mono'>
          <TfiEmail size={20} className='my-1 lg:mx-2 text-purple-600'/>
          vodumeh@gmail.com
        </p>
        <div className='w-[90%] md:w-[50%] lg:w-[30%]'>
          <SocialLinks/>
        </div>
      </div>
    </footer>
  )
}

export default Footer
