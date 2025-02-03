import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {

    useEffect(() => {
            AOS.init();
        }, [])
    
  return (
    <>

       <section id='about' name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 font-sans'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[100px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8'>
                        <p className='text-4xl font-bold inline border-b-8 border-[#C23B22]'>About</p>
                    </div>

                    <div>

                    </div>

                </div>

                <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                    <div className='sm:text-right text-4xl font-bold' data-aos='fade-right' data-aos-duration='1000'>
                        <p>Hi,  I am <span className='text-[#C23B22]'>KAVYA</span> Please take a look of my Projects,Or Read My Blogs <span className='text-[#C23B22]'></span>.</p>
                    </div>
                    <div data-aos='fade-up' data-aos-duration='1000'>
                        <p>
                            I am 2nd year student pursuing my btech in CSE .
                            I am a passionate Backend javascript developer with strong problem-solving skills and proficient in Nodejs and expressJs .
                            I try to learn new things in tech everyday and i m very hardworking,dedicated person
                            I am Skilled in C/C++, JavaScript, React.js, Node.js, and MongoDB. and made some projects using MERN stack
                        </p>
                    </div>

                </div>

            </div>

        </section>

    </>
		
  )
}

export default About