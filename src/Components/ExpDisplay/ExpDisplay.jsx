import React from 'react'
import './expd.css'

const ExpDisplay = () => {
  return (
    <div className='max-w-[1200px] mx-auto my-[5%] px-4'>

      <div className='flex my-10 flex-col md:flex-col lg:flex-row justify-between items-center'>

        <div className='w-[100%] md:w-[100%] lg:w-[40%]'>
            <h1 className='one text-[2.2rem] md:text-[2.4rem] lg:text-[4rem] font-mono text-purple-600 text-left hidden md:hidden lg:flex'>01</h1>
        </div>

        <div className='w-[100%] md:w-[100%] lg:w-[60%]'>
            <div className='two bg-zinc-900 p-4 rounded-lg w-full cursor-pointer duration-200 hover:scale-105'>
                <div className='flex flex-col md:flex-row lg:flex-row text-center md:text-justify lg:text-justify justify-between items-center'>
                    <h1 className='text-[1.2rem] font-mono text-purple-500'>Zuri Team, Inc.</h1>
                    <p className='text-[1rem] text-gray-400'>September, 2023 - Present, Kano, Nigeria</p>
                </div>
                <p className='text-[1rem] text-center md:text-justify lg:text-justify text-gray-400'>Frontend Developer || Internship || Remote</p>
                <ul className='py-2 px-2'>
                    <li className='list-disc p-2 text-[.9rem] font-mono'>Translated UI/UX designs to enhance the user experience.</li>
                    <li className='list-disc p-2 text-[.9rem] font-mono'>Collaborated effectively with a cross-functional team of 5 members to design and develop responsive and user-friendly web applications.</li>
                </ul>
            </div>
        </div>

      </div>

      <div className='flex my-10 flex-col md:flex-col lg:flex-row justify-between items-center'>


        <div className='w-[100%] md:w-[100%] lg:w-[60%]'>
            <div className='three bg-zinc-900 p-4 rounded-lg w-full cursor-pointer duration-300 hover:scale-105'>
                <div className='flex flex-col md:flex-row lg:flex-row text-center md:text-justify lg:text-justify justify-between items-center'>
                    <h1 className='text-[1.2rem] font-mono text-purple-500'>Side Hustle</h1>
                    <p className='text-[1rem] text-gray-400'>October, 2023 - November, 2023, Kwara, Nigeria</p>
                </div>
                <p className='text-[1rem] text-center md:text-justify lg:text-justify text-gray-400'>Web Developer || Internship || Remote</p>
                <ul className='py-2 px-2'>
                    <li className='list-disc p-2 text-[.9rem] font-mono'> Brainstormed with a team of five developers, achieving 15% improved website efficiency.</li>
                    <li className='list-disc p-2 text-[.9rem] font-mono'>Developed optimized landing pages in HTML and CSS for cross-browser compatibility.</li>
                </ul>
            </div>
        </div>


        <div className='text-right w-[100%] md:w-[100%] lg:w-[40%]'>
            <h1 className='four text-[2.2rem] md:text-[2.4rem] lg:text-[4rem] font-mono text-purple-600 hidden md:hidden lg:flex'>02</h1>
        </div>

      </div>


      <div className='flex my-10 flex-col md:flex-col lg:flex-row justify-between items-center'>



        <div className='w-[100%] md:w-[100%] lg:w-[40%]'>
            <h1 className='five text-[2.2rem] md:text-[2.4rem] lg:text-[4rem] font-mono text-purple-600 text-left hidden md:hidden lg:flex'>03</h1>
        </div>

        <div className='w-[100%] md:w-[100%] lg:w-[60%]'>
            <div className='six bg-zinc-900 p-4 rounded-lg w-full cursor-pointer duration-200 hover:scale-105'>
                <div className='flex flex-col md:flex-row lg:flex-row text-center md:text-justify lg:text-justify justify-between items-center'>
                    <h1 className='text-[1.2rem] font-mono text-purple-500'>Aptech Computer Education</h1>
                    <p className='text-[1rem] text-gray-400'>April, 2022 - August, 2022, Kano, Nigeria</p>
                </div>
                <p className='text-[1rem] text-center md:text-justify lg:text-justify text-gray-400'>PHP/MySQL Developer|| Internship || On-site</p>
                <ul className='py-2 px-2'>
                    <li className='list-disc p-2 text-[.9rem] font-mono'>Managed PHP apps and MySQL databases, ensuring data integrity and 20% less downtime.</li>
                    <li className='list-disc p-2 text-[.9rem] font-mono'>Optimized SQL queries, 30% efficiency boost, valuable insights to stakeholders.</li>
                </ul>
            </div>
        </div>



      </div>
    </div>
  )
}

export default ExpDisplay
