import React from 'react'
import Api1 from '../assets/Api1.png'
import MVC from '../assets/MVC-SQL.png'
import Portfolio2 from '../assets/Portfolio2.png'

const Projects = () => {
    const Projects = [
        {
            id:1,
            title: 'Image Search with API',
            src:Api1,
            stacks:'-HTML',
            stacks2:'-CSS',
            stacks3:'-JavaScript',
            stacks4:'-Unspalsh API',
            link:'https://drive.google.com/file/d/1Vy2FSCfxXJouwgVUWNdYOU7KFKczhd9o/view?usp=sharing',
        },
        {
            id:2,
            title: 'CRUD for School Enrollment',
            src:MVC,
            stacks:'-HTML Bootstrap',
            stacks2:'-MVC',
            stacks3:'-Entity Framework',
            stacks4:'-SQL Server',
            stacks5:'-C#',
            link:'https://drive.google.com/file/d/17DcpPZfg1ovOYAc2m039qt4bDBfPJux7/view?usp=sharing',
        },
        {
            id:3,
            title:'Personal Portfolio',
            src:Portfolio2,
            stacks:'-ReactJS',
            stacks2:'-Tailwind css'
        },
        
    ]

  return (
    <div name='Projects' className='bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className='py-6'>Check some of my projects documentation</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 h-1/2'>

            {
                Projects.map(({id,title,src,stacks,stacks2,stacks3,stacks4,stacks5,link}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg '>
                    <img src={src} alt='' className='rounded-md duration-200 hover:scale-125'/>
                    <div className='flex items-center justify-center'>
                        <a href={link}><button className='w-full px-6 pt-4 py-3 m-4 duration-200 hover:scale-105 border-2 border-purple-600 shadow-purple-600'>
                            Documentation
                        </button></a>
                    </div>
                    <p className='text-gray-300 font-bold'>{title}</p>
                        <ul className='text-xs'>
                            <li>{stacks}</li>
                            <li>{stacks2}</li>
                            <li>{stacks3}</li>
                            <li>{stacks4}</li>
                            <li>{stacks5}</li>
                        </ul>
                </div>
                    
                ))
            }

            </div>
        </div>

    </div>
  )
}

export default Projects
