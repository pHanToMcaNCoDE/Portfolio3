import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Left from '../Left/Left'
import Right from '../Right/Right'


const Home = () => {
  return (
    <div className="flex flex-col h-[135vh] md:h-[103vh] lg:h-[100vh] max-w-[1500px] bg-neutral-950">
      <Navbar/>
      <div className="mx-auto h-[100vh] md:h-[90vh] lg:h-[85vh] flex flex-col items-center lg:flex-row lg:justify-center lg:items-center">
        <Left/>
        <Right/>
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default Home
