import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import github from '../assets/github.png';
import Bootstrap from '../assets/Bootstrap.png';
import zoho from '../assets/Zoho.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react_1.png';
import sitecore from '../assets/Sitecore.png';
import tailwind from '../assets/tailwind.png';
import Csharp from '../assets/Csharp.png';


const Skills = () => {
    const techs =[
        {
            id: 1,
            src:html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src:css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src:javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src:react,
            title: 'REACT',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src:tailwind,
            title: 'TAILWIND',
            style: 'shadow-sky-500'
        },
        {
            id: 6,
            src:Bootstrap,
            title: 'BOOTSTRAP',
            style: 'shadow-purple-600'
        },
        {
            id: 7,
            src:github,
            title: 'GITHUB',
            style: 'shadow-gray-500'
        },
        {
            id: 8,
            src:zoho,
            title: 'CRM',
            style: 'shadow-sky-600'
        },
        {
            id: 9,
            src:sitecore,
            title: 'SITECORE',
            style: 'shadow-red-400'
        },
        {
            id: 10,
            src:Csharp,
            title: 'C#',
            style: 'shadow-violet-700'
        },
    ]

  return (
    <div name="Skills" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

            <div>
                <p className='text-4xl font-bold p-2 inline mt-4'>Skills/Tech Stacks</p>
            </div>

            <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
                 {
                    techs.map(({id, src, title, style}) =>(
                        <div key={id}className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                           <img src={src} alt="" className='w-20 mx-auto' />
                           <p className='mt-4 text-sm md:text-xs'>{title}</p>
                         </div>
                    ))
                 }
            </div>
        </div>
    </div>
  )
}

export default Skills
