import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Left from '../Left/Left'
import Right from '../Right/Right'
import NavbarOrigin from '../Navbar/NavbarOrigin'


const Home = () => {
  return (
    <main className="min-h-screen bg-neutral-950">
      <NavbarOrigin/>
      <section className='flex flex-col max-w-[1300px] mx-auto'>
        <div className="mx-auto flex flex-col lg:flex-row justify-center items-center mt-[3%] lg:h-[70vh]">
          <Left/>
          <Right/>
        </div>
        <Footer/>
      </section>
    </main>
  )
}

export default Home
