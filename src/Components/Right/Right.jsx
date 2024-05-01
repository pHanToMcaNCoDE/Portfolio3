import React from 'react'
import {RxExternalLink} from 'react-icons/rx'
import { Link } from 'react-router-dom'
import './right.css'
import {BsDownload} from 'react-icons/bs'

const Right = () => {


  return (
    <section className="w-full lg:w-[50%]">
      <Link to="/experiences">
        <div className="flex flex-col after:rounded-lg after:duration-300 after:w-1 after:inline-flex after:h-[1px] after:bg-white hover:after:w-full cursor-pointer duration-300 hover:scale-105 appearOne mx-auto w-[90%] md:w-[70%] lg:w-[80%] my-8 rounded-lg bg-zinc-900">
          <div className="flex flex-col p-5 justify-between">
            <span className="duration-300 hover:text-purple-600 cursor-pointer flex items-center font-mono tracking-widest text-white text-[1rem] lg:text-[1.5rem]">
              Experiences
              <RxExternalLink className="lg:m-2" />
            </span>
            <p className="font-sans tracking-wider text-[.9rem] lg:text-[1.1rem] text-zinc-600 text-justify">
              Click on the card to view my experiences as a Frontend Developer
            </p>
          </div>
        </div>
      </Link>

      <Link to="/portfolio">
        <div className="flex flex-col after:rounded-lg after:duration-300 after:w-1 after:inline-flex after:h-[1px] after:bg-white hover:after:w-full cursor-pointer duration-300 hover:scale-105 appearOne mx-auto w-[90%] md:w-[70%] lg:w-[80%] my-8 rounded-lg bg-zinc-900">
          <div className="flex flex-col p-5 justify-between">
            <span className="duration-300 hover:text-purple-600 cursor-pointer flex items-center font-mono tracking-widest text-white text-[1rem] lg:text-[1.5rem]">
              Portfolio <RxExternalLink className="lg:m-2" />
            </span>
            <p className="font-sans tracking-wider text-[.9rem] lg:text-[1.1rem] text-zinc-600 text-justify">
              Click on the card to view my projects
            </p>
          </div>
        </div>
      </Link>

      <a
        href="https://drive.google.com/file/d/1bRVCEmfGxF7IU4kzFRdM9-b-l2d1Y3Tq/view"
        target="_blank"
        download="Victory Odumeh Frontend Developer"
      >
        <div className="flex flex-col after:rounded-lg after:duration-300 after:w-1 after:inline-flex after:h-[1px] after:bg-white hover:after:w-full cursor-pointer duration-300 hover:scale-105 appearOne mx-auto w-[90%] md:w-[70%] lg:w-[80%] my-8 rounded-lg bg-zinc-900">
          <div className="flex flex-col p-5 justify-between">
            <span className="duration-300 hover:text-purple-600 cursor-pointer flex items-center font-mono tracking-widest text-white text-[1rem] lg:text-[1.5rem]">
              My Resume <BsDownload className="lg:m-2" />
            </span>
            <p className="font-sans tracking-wider text-[.9rem] lg:text-[1.1rem] text-zinc-600 text-justify">
              Click on the card to see my resume
            </p>
          </div>
        </div>
      </a>
    </section>
  );
}

export default Right
