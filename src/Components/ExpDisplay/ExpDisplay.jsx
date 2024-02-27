import React from 'react'
import './expd.css'

const ExpDisplay = () => {
  return (
    <main className='max-w-[1200px] mx-auto my-[5%] px-4'>
      <section className='flex my-10 flex-col lg:flex-row justify-between items-center'>

        <h1 className='one text-[2.2rem] md:text-[2.4rem] lg:text-[4rem] font-mono text-purple-600 text-center lg:text-left w-full lg:w-[40%]'>01</h1>

        <div className='w-full md:w-[90%] lg:w-[60%]'>
            <div className='two bg-zinc-900 p-4 rounded-lg w-full cursor-pointer duration-200 hover:scale-105'>
                <div className='flex flex-col md:flex-row lg:flex-row text-center md:text-justify lg:text-justify justify-between items-center'>
                    <h1 className='text-[1.2rem] font-mono text-purple-500'>Co_Lab Apes</h1>
                    <p className='text-[.9rem] text-gray-400 font-mono'>January, 2024 - Present, Kano, Nigeria</p>
                </div>
                <p className='font-mono text-[1rem] text-center md:text-justify lg:text-justify text-gray-400'>Frontend Developer || Internship || Remote</p>
                <ul className='py-2 px-2'>
                    <li className='list-disc p-2 text-[.9rem] font-mono'>Worked closely with other team members to identify and remove software bugs.</li>
                    <li className='list-disc p-2 text-[.9rem] font-mono'>Collaborated effectively with a cross-functional team of 3 members to design and develop a responsive and user-friendly web application.</li>
                </ul>
            </div>
        </div>

      </section>

      <section className='flex my-10 flex-col lg:flex-row justify-between items-center'>


        <div className='w-full md:w-[90%] lg:w-[60%]'>
            <div className='two bg-zinc-900 p-4 rounded-lg w-full cursor-pointer duration-200 hover:scale-105'>
                <div className='flex flex-col md:flex-row lg:flex-row text-center md:text-justify lg:text-justify justify-between items-center'>
                    <h1 className='text-[1.2rem] font-mono text-purple-500'>Zuri Team, Inc.</h1>
                    <p className='text-[.9rem] text-gray-400 font-mono'>September, 2023 - November, 2023, Kano, Nigeria</p>
                </div>
                <p className='font-mono text-[1rem] text-center md:text-justify lg:text-justify text-gray-400'>Frontend Developer || Internship || Remote</p>
                <ul className='py-2 px-2'>
                    <li className='list-disc p-2 text-[.9rem] font-mono'>Developed responsive landing pages in HTML and CSS for various devices.</li>
                    <li className='list-disc p-2 text-[.9rem] font-mono'>Collaborated with a team of five to design and construct email templates using MJML, ensuring responsive and visually appealing communication materials.</li>
                </ul>
            </div>
        </div>

        <h1 className='one text-[2.2rem] md:text-[2.4rem] lg:text-[4rem] font-mono text-purple-600 text-center lg:text-right w-full lg:w-[40%]'>02</h1>

      </section>



      <section className='flex my-10 flex-col-reverse lg:flex-row justify-between items-center'>

        <h1 className='four text-[2.2rem] md:text-[2.4rem] lg:text-[4rem] font-mono text-purple-600 w-full lg:w-[40%] text-center lg:text-left'>03</h1>

        <div className='w-full md:w-[90%] lg:w-[60%]'>
            <div className='three bg-zinc-900 p-4 rounded-lg w-full cursor-pointer duration-300 hover:scale-105'>
                <div className='flex flex-col md:flex-row lg:flex-row text-center md:text-justify lg:text-justify justify-between items-center'>
                    <h1 className='text-[1.2rem] font-mono text-purple-500'>Side Hustle</h1>
                    <p className='text-[.9rem] text-gray-400 font-mono'>October, 2023 - November, 2023, Kwara, Nigeria</p>
                </div>
                <p className='text-[1rem] text-center md:text-justify lg:text-justify text-gray-400 font-mono'>Web Developer || Internship || Remote</p>
                <ul className='py-2 px-2'>
                    <li className='list-disc p-2 text-[.9rem] font-mono'> Collaborated with a team to identify and implement performance optimizations, resulting in a measurable 15% increase in website efficiency.</li>
                    <li className='list-disc p-2 text-[.9rem] font-mono'>Created optimized landing pages in HTML and CSS for cross-browser compatibility.</li>
                </ul>
            </div>
        </div>


      </section>


      <section className='flex my-10 flex-col lg:flex-row justify-between items-center'>

        <div className='w-full md:w-[90%] lg:w-[60%]'>
            <div className='six bg-zinc-900 p-4 rounded-lg w-full cursor-pointer duration-200 hover:scale-105'>
                <div className='flex flex-col md:flex-row lg:flex-row text-center md:text-justify lg:text-justify justify-between items-center'>
                    <h1 className='text-[1.2rem] font-mono text-purple-500'>Aptech Computer Education</h1>
                    <p className='text-[.9rem] text-gray-400 font-mono'>April, 2022 - August, 2022, Kano, Nigeria</p>
                </div>
                <p className='text-[1rem] text-center md:text-justify lg:text-justify text-gray-400 font-mono'>PHP/MySQL Developer|| Internship || On-site</p>
                <ul className='py-2 px-2'>
                    <li className='list-disc p-2 text-[.9rem] font-mono'>Proficiently utilized MySQL to design and manage databases, ensuring efficient storage and retrieval of data.</li>
                    <li className='list-disc p-2 text-[.9rem] font-mono'>Demonstrated expertise in PHP development, implementing dynamic functionality and seamless integration with MySQL databases for robust web applications.</li>
                </ul>
            </div>
        </div>

        <h1 className='five text-[2.2rem] md:text-[2.4rem] lg:text-[4rem] font-mono text-purple-600 text-center lg:text-right w-full lg:w-[40%]'>04</h1>
      </section>

    </main>
  )
}

export default ExpDisplay
