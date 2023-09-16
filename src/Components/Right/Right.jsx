import React from 'react'
import {RxExternalLink} from 'react-icons/rx'
import { Link } from 'react-router-dom'
import './right.css'
// import { Link } from 'react-router-dom'

const Right = () => {
  return (
    <div className='w-[100%] md:w-[100%] lg:w-[50%]'>

        <Link to='/experiences'>
            <div className='flex flex-col after:rounded-lg after:duration-300 after:w-1 after:inline-flex after:h-[1px] after:bg-white hover:after:w-full cursor-pointer duration-300 hover:scale-105 appearOne mx-auto w-[60%] h-[36%] md:h-[36%] lg:h-[30%] my-8 rounded-lg bg-zinc-900'>
                <div className='flex flex-col p-5 justify-between'>
                    <span className='duration-300 hover:text-purple-600 cursor-pointer flex items-center font-mono tracking-widest text-white text-[1rem] lg:text-[1.5rem]'>Resume/Experiences<RxExternalLink className='lg:m-2'/></span>
                    <p className='font-sans tracking-wider text-[.9rem] lg:text-[1.1rem] text-zinc-600'>Click on the card to view my experiences as a Frontend Developer</p>
                </div>
            </div>
        </Link>

        <Link to='/portfolio'>
            <div className='flex flex-col after:rounded-lg after:duration-300 after:w-1 after:inline-flex after:h-[1px] after:bg-white hover:after:w-full cursor-pointer duration-300 hover:scale-105 appearOne mx-auto w-[60%] h-[36%] md:h-[36%] lg:h-[30%] my-8 rounded-lg bg-zinc-900'>
                <div className='flex flex-col p-5 justify-between'>
                    <a href='https://www.google.com' className='duration-300 hover:text-purple-600 cursor-pointer flex items-center font-mono tracking-widest text-white text-[1rem] lg:text-[1.5rem]'>Portfolio <RxExternalLink className='lg:m-2'/></a>
                    <p className='font-sans tracking-wider text-[.9rem] lg:text-[1.1rem] text-zinc-600'>Click on the title above to view my finished projects</p>
                </div>
            </div>
        </Link>

    </div>
  )
}

export default Right
