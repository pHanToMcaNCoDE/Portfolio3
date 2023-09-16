import React from 'react'
import './left.css'
import {FaLinkedinIn, FaInstagram, FaTwitter, FaFacebookF, FaGithub} from 'react-icons/fa'

const Left = () => {
  return (
    <div className='p-4 h-[50%] w-[100%] md:w-[100%] lg:w-[50%] lg:h-[100%]'>
        <div className='mt-[30%] flex flex-col items-center'>
            <span className='text-[1rem] md:text-[1.4rem] lg:text-[2.3rem] text-white p-3 font-mono tracking-widest'>
                Victory Odumeh .K.
            </span>
            <p className='duration-300 textTwo text-sans text-zinc-600 text-[.8rem] pl-[10%] md:text-[1.2rem] lg:text-[1.2rem] tracking-widest'>Solution-driven 
                 Frontend Developer with experience in developing stunning web applications using technologies such as <span className='text-yellow-500 underline'>JavaScript</span>, <span className='text-pink-500 underline'>Sass</span>, <span className='text-purple-500 underline'>Bootstrap</span>, <span className='text-blue-500 underline'>ReactJS <span className='text-white'>,</span> TailwindCSS</span> and <span className='text-purple-700 underline'>PHP/<span className='text-yellow-500 underline'>MySQL</span></span>.
            </p>
        </div>
            <div className='textThree flex list-none'>
                <li className='mx-auto my-[8%] duration-300 hover:scale-110 text-white cursor-pointer'>
                    <FaLinkedinIn size={40} className='border border-white hover:border hover:bg-purple-600 hover:text-white hover:border-purple-600 rounded-full p-2 animate-bounce'/>
                </li>
                <li className='mx-auto my-[8%] duration-300 hover:scale-110 text-white hover:text-purple-600 cursor-pointer'>
                    <FaInstagram size={40} className='border border-white hover:border hover:bg-purple-600 hover:text-white hover:border-purple-600 rounded-full p-2 animate-bounce'/>
                </li>
                <li className='mx-auto my-[8%] duration-300 hover:scale-110 text-white hover:text-purple-600 cursor-pointer'>
                    <FaTwitter size={40} className='border border-white hover:border hover:bg-purple-600 hover:text-white hover:border-purple-600 rounded-full p-2 animate-bounce'/>
                </li>
                <li className='mx-auto my-[8%] duration-300 hover:scale-110 text-white hover:text-purple-600 cursor-pointer'>
                    <FaFacebookF size={40} className='border border-white hover:border hover:bg-purple-600 hover:text-white hover:border-purple-600 rounded-full p-2 animate-bounce'/>
                </li>
                <li className='mx-auto my-[8%] duration-300 hover:scale-110 text-white hover:text-purple-600 cursor-pointer'>
                    <FaGithub size={40} className='border border-white hover:border hover:bg-purple-600 hover:text-white hover:border-purple-600 rounded-full p-2 animate-bounce'/>
                </li>
            </div>
    </div>
  );
}

export default Left

