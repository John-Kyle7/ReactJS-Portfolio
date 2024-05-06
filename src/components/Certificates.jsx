import React from 'react';
import azure from '../assets/azure.png';
import cyberops from '../assets/cyberops.png';
import networks from '../assets/intro_networks.png';
import responsive from '../assets/Responsive.png';
import swre from '../assets/swre.png';
import wph from '../assets/WPH.png';


const Certificates = () => {
    const certificates = [
        { id: 1, src: azure, alt: 'Azure Certificate',title:'Microsoft Azure Fundamentals' },
        { id: 2, src: cyberops, alt: 'CyberOps Certificate',title:'CyberOps Associate'  },
        { id: 3, src: networks, alt: 'Networks Certificate',title:'Introduction to Networks'  },
        { id: 4, src: responsive, alt: 'Responsive Certificate',title:'Responsive Web Design' },
        { id: 5, src: swre, alt: 'SWRE Certificate',title:'Cisco SWRE' },
        { id: 6, src: wph, alt: 'WPH Certificate',title:'Coding Bootcamp'  }
    ]

    return (
        <div name="Certificates" className='bg-gradient-to-b from-black to-gray-800 w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
    
                <div>
                    <p className='text-4xl font-bold p-2 inline mt-4'>Trainings & Certifications</p>
                </div>
    
                <div className='w-full grid grid-cols-3 sm:grid-cols-2 gap-6 text-center py-8 px-12 sm:px-0'>
                     {
                         certificates.map(({id, src, title}) =>(
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg`}>
                               <img src={src} alt="" className='w-full sm:w-1/2 md:w-1/2 mx-auto hover:scale-150 ' />
                               <p className='mt-2 text-sm md:text-xs'>{title}</p>
                             </div>
                        ))
                     }
                </div>
            </div>
        </div>
      )
    }
    

export default Certificates;
