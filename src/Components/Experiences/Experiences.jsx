import React from 'react'
import ExpDisplay from '../ExpDisplay/ExpDisplay'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './exp.css'

const Experiences = () => {
  return (
    <section className='bg-neutral-950 w-full  text-white'>
      <Navbar/>
      <div className='max-w-[1200px] mx-auto p-2'>
          <h1 className='font-mono text-center text-[2rem] lg:text-[3rem] text-purple-500 tracking-widest header'>Experiences</h1>

          <div className='text-center'>
            <p className='p w-[90%] lg:w-[60%] p-1 mx-auto font-mono text-[1.1rem]tracking-wide leading-8'>Detailed-oriented Developer capable of crafting aesthetically pleasing and responsive UI applications.</p>
            
          </div>

          <ExpDisplay/>
          <Footer/>

      </div>

    </section>
  )
}

export default Experiences
