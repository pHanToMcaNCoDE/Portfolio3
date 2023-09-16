import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { projects } from '../../Data/Data'
import {AiOutlineLink} from 'react-icons/ai'
import './port.css'

const Portfolio = () => {
  return (
    <div className='w-full md:h-[103vh] lg:h-[105vh] bg-neutral-950 text-white'>
        <Navbar/>
      <div className='max-w-[1300px] p-4 mx-auto'>
        <h1 className='font-mono text-center text-[2rem] lg:text-[3rem] text-purple-500 tracking-widest header'>Portfolio</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[2%] gap-8'>

            {
                projects.map(item => (
                    <div key={item.id} className='one bg-zinc-900 w-full lg:w-[100%] after:rounded-lg after:duration-300 after:w-1 after:inline-flex after:h-[1px] after:bg-white hover:after:w-full rounded-xl'>
                        <div className='flex justify-between items-center p-4'>
                            <h1 className='text-left font-mono text-[1.3rem]'>{item.name}</h1>
                            <a className=' duration-300 hover:text-purple-500 flex items-center font-mono text-[.8rem] tracking-wider' href={item.view} target='_blank'><AiOutlineLink size={22} className='mr-2'/>View Project</a>
                        </div>
                        
                        <p className='p-4 font-mono text-[.9rem] text-justify text-gray-300'>{item.desc}</p>
                        <div className='flex justify-between items-center px-4'>
                            <div className='flex items-center'>
                                <div style={{ backgroundColor: item.color }} className='w-2 h-2 rounded-full'></div>
                                <p className='ml-3 font-mono text-[.9rem] tracking-widest'>{item.tool}</p>
                            </div>
                            <a className=' flex items-center font-mono text-[.8rem] tracking-wider duration-300 hover:text-purple-500' href={item.github} target='_blank'><AiOutlineLink size={22} className='mr-2'/>GitHub</a>
                        </div>
                    </div>
                ))
            }

            

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Portfolio
