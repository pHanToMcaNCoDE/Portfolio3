import React from 'react'
import { AiOutlineLink } from 'react-icons/ai'

const Box = ({item}) => {
  return (
    <div key={item.id} className='one bg-zinc-900 w-full after:rounded-lg after:duration-300 after:w-1 after:inline-flex after:h-[1px] after:bg-white hover:after:w-full rounded-sm relative lg:h-[95%]'>

        <div className='flex justify-between items-center p-4'>
            <h1 className='text-left font-mono text-[1.3rem]'>{item.name}</h1>
            <a className=' duration-300 hover:text-purple-500 flex items-center font-mono text-[.8rem] tracking-wider' href={item.view} target='_blank'><AiOutlineLink size={22} className='mr-2' rel="noreferrer"/>View Project</a>
        </div>
        
        <p className='p-4 font-mono text-[.9rem] text-justify text-gray-300 tracking-wider w-full lg:h-[64%]'>{item.desc}</p>
        <div className='flex justify-between items-center px-2 pt-3 pb-0 w-full'>
            <div className='flex items-center gap-x-2'>
                <div style={{ backgroundColor: item.color }} className='w-2 h-2 rounded-full'></div>
                <p className='font-mono text-[.9rem] tracking-widest'>{item.tool}</p>
            </div>
            <a className='flex items-center font-mono text-[.8rem] tracking-wider duration-300 hover:text-purple-500' href={item.github} target='_blank'><AiOutlineLink size={22} className='gap-x-2'/>GitHub</a>
        </div>
    </div>
  )
}

export default Box
