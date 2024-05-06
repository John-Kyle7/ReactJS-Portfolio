import React from 'react'
import HeroImage from '../assets/JohnKyle2x2.jpg'
import { MdOutlineKeyboardArrowRight} from "react-icons/md"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Home = () => {

    const links =[
        {
            id:1,
            child:(
                <>
                 <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/john-kyle-sangalang-22721a27a/",
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/John-Kyle7",
        },
        {
            id:3,
            child:(
                <>
                <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:jkas7800@gmail.com",
        },
        {
            id:4,
            child:(
                <>
                <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "https://drive.google.com/file/d/1Y4POyine81lxjiM_0qsQhmq98PpUOsCO/view?usp=sharing",
            style: 'rounded-br-md'
        },
      ]

  return (
    <div name ='Home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800' >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-1/2'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'> I am a Web Developer</h2>
                <p2 className='text-gray-500 py-4 max-w-md'>I am John Kyle A. Sangalang. I graduated BS Computer Engineering in University of Batangas. For my work experience I have experience as a Full stack .Net Developer in WPH Digital Pte Ltd I also have an internship experience as an CRM Administrator in GSYNC Solutions. You can click the button below for my resume</p2>

                <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                    <a href="https://drive.google.com/file/d/1Y4POyine81lxjiM_0qsQhmq98PpUOsCO/view?usp=sharing">
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        RESUME
                        <span className='hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight />
                        </span> 
                    </button></a>
                    <ul className="flex lg:hidden">
                         {links.map(({ id, child, href, style }) => (
                         <li key={id} className={'flex items-center w-20 h-12 px-4 ' + style}>
                         <a href={href} className='grid w-1/4 text-white'>
                         {child}
                         </a>
                         </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="my Profile" className='rounded-2xl mx-auto w-1/3 md:w-1/2' />
            </div>
        </div>
    </div>
  )
}

export default Home
