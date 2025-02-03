import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';


import HTML from '../assets/html.png'
import CSS from '../assets/css.png';
import TailwindLogo from '../assets/tailwind.png';
import JavaScript from '../assets/javascript.png';
import ReactLogo from '../assets/react.png';
import GithubLogo from '../assets/github.png';
import NodeJsLogo from '../assets/node.png';

const SkillsSection = () => {

    useEffect(() => {
        AOS.init();
    }, [])

  return (
    <div >
        <section id='skills' name='skills' className='w-full h-screen text-gray-300 bg-[#0a192f] font-sans'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#C23B22]'>Skills</p>

                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 my-4'>
                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='1000'>
                            <img src={HTML} className='w-20 mx-auto' alt="html icon" />
                            <p className='my-4'>HTML</p>
                        </div>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='1500'>
                            <img src={CSS} className='w-20 mx-auto' alt="css icon" />
                            <p className='my-4'>CSS</p>
                        </div>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='2000'>
                            <img src={JavaScript} className='w-20 mx-auto' alt="javascript icon" />
                            <p className='my-4'>JavaScript</p>
                        </div>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='2500'>

                            <img src={ReactLogo} className='w-20 mx-auto' alt="react icon" />
                            <p className='my-4'>ReactJs</p>
                        </div>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='3000'>
                            <img src={GithubLogo} className='w-20 mx-auto' alt="github icon" />
                            <p className='my-4'>Github</p>
                        </div>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='4000'>

                            <img src={TailwindLogo} className='w-20 mx-auto' alt="tailwind icon" />
                            <p className='my-4'>Tailwind CSS</p>
                        </div>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='4500'>

                            <img src={NodeJsLogo} className='w-20 mx-auto' alt="nodejs icon" />
                            <p className='my-4'>Nodejs</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    </div>
  )
}

export default SkillsSection