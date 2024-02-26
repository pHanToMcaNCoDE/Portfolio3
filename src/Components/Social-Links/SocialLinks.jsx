import React from 'react'
import {FaLinkedinIn, FaInstagram, FaTwitter, FaFacebookF, FaGithub} from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <section>
        <div className='textThree flex list-none'>
            <li className='mx-auto my-[8%] duration-300 hover:scale-110 text-white cursor-pointer'>
                <a target='_blank' href='https://www.linkedin.com/in/victory-odumeh-421761223/'>
                    <FaLinkedinIn size={40} className='border border-white hover:border hover:bg-purple-600 hover:text-white hover:border-purple-600 rounded-full p-2 animate-bounce'/>
                </a>
            </li>
            <li className='mx-auto my-[8%] duration-300 hover:scale-110 text-white hover:text-purple-600 cursor-pointer'>
                <a target='_blank' href='https://www.instagram.com/_kachi.dev/'>
                    <FaInstagram size={40} className='border border-white hover:border hover:bg-purple-600 hover:text-white hover:border-purple-600 rounded-full p-2 animate-bounce'/>
                </a>
            </li>
            <li className='mx-auto my-[8%] duration-300 hover:scale-110 text-white hover:text-purple-600 cursor-pointer'>
                <a target='_blank' href='https://twitter.com/kachicodes1'>
                    <FaTwitter size={40} className='border border-white hover:border hover:bg-purple-600 hover:text-white hover:border-purple-600 rounded-full p-2 animate-bounce'/>
                </a>
            </li>
            <li className='mx-auto my-[8%] duration-300 hover:scale-110 text-white hover:text-purple-600 cursor-pointer'>
                <a target='_blank' href='https://web.facebook.com/victory.odumeh'>
                    <FaFacebookF size={40} className='border border-white hover:border hover:bg-purple-600 hover:text-white hover:border-purple-600 rounded-full p-2 animate-bounce'/>
                </a>
            </li>
            <li className='mx-auto my-[8%] duration-300 hover:scale-110 text-white hover:text-purple-600 cursor-pointer'>
                <a target='_blank' href='https://github.com/pHanToMcaNCoDE'>
                    <FaGithub size={40} className='border border-white hover:border hover:bg-purple-600 hover:text-white hover:border-purple-600 rounded-full p-2 animate-bounce'/>
                </a>
            </li>
        </div>
    </section>
  )
}

export default SocialLinks
