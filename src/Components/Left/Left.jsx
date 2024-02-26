import React from 'react'
import './left.css'
import SocialLinks from '../Social-Links/SocialLinks';
import vick from '../../victory.png'

const Left = () => {
  return (
    <section className='p-4 w-full lg:w-[50%]'>
        <img className='w-32 h-32 lg:w-52 lg:h-52 rounded-full mx-auto object-cover' src={vick} alt='Victory Odumeh'></img>
        <div className='flex flex-col justify-center items-center'>
            <span className='textOne text-[1rem] md:text-[1.4rem] lg:text-[2.3rem] text-white p-3 font-mono tracking-widest text-center'>
                Victory Odumeh .K.
            </span>
            <p className='duration-300 textTwo text-sans text-zinc-600 text-[.8rem] md:text-[1.2rem] lg:text-[1.2rem] tracking-widest text-center'>Solution-driven 
                 Full-Stack Developer with experience in developing stunning web applications using technologies such as <span className='text-yellow-500 underline'>JavaScript</span>, <span className='text-pink-500 underline'>Sass</span>, <span className='text-purple-500 underline'>Bootstrap</span>, <span className='text-blue-500 underline'>ReactJS <span className='text-white'>,</span> TailwindCSS</span> and <span className='text-purple-700 underline'>PHP/<span className='text-yellow-500 underline'>MySQL</span></span>.
            </p>
        </div>
        <SocialLinks/>
    </section>
  );
}

export default Left

