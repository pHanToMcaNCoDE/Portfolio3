import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { projects } from '../../Data/Data'
// import {AiOutlineLink} from 'react-icons/ai'
import './port.css'
import axios from 'axios'
// import { PiDivideBold } from 'react-icons/pi'
import Skeleton from '../Skeleton/Skeleton'
import Box from '../Box/Box'

const Portfolio = () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('../../Data/Data')
        .then((res) => {
          setData(res.data)
          setLoading(false)
        })
        .catch((err) => {
          console.log(err.message)
          setLoading(false)
        })
    }, [])


  return (
    <div>
        {
            loading ? 
            (
              <div>
                <Skeleton/>
              </div>
            ):(
              <section className='bg-neutral-950'>
                <div className='text-white max-w-[1200px] mx-auto'>
                  <Navbar/>
                  <div className='p-2'>
                    <h1 className='font-mono text-center text-[2rem] lg:text-[3rem] text-purple-500 tracking-widest header'>Portfolio</h1>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[2%] gap-4'>

                      {
                          projects.map(item => (
                              <Box item={item}/>
                          ))
                      }

                    </div>
                  </div>
                  <Footer/>
                </div>
              </section>
            )
        }
      </div>
  )
}

export default Portfolio
