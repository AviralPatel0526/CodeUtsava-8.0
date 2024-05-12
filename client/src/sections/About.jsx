import React from 'react'
import tailwind from '../assets/tailwind.png'
import js from '../assets/js.png'
import react from '../assets/reactjs.png'
import node from '../assets/nodejs.png'
import express from '../assets/express.png'
import postgres from '../assets/postgresql.png'
function About() {
  return (
    <div className='w-[49vw] min-h-[100vh] flex flex-col font-poppins p-8 gap-8'>
        <div className='flex flex-col gap-4'>
            <div className='h-[5vh] flex items-center '>
            <h1 className='text-xl font-medium'><span className='text-primary'>About</span> Me</h1>
            </div>
            <hr />
            <p >I am a dedicated Programmer and Developer based in Raipur, India.</p>
            <p className='text-gray-600'>As a Sophomore, I possess an impressive arsenal of skills in TailwindCSS, JavaScript, ReactJS, Express and MySQL. I excel in designing and maintaining responsive websites and applications that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques.</p>
        </div>
        <div className='flex flex-col gap-2'>
        <div className='h-[5vh] flex items-center '>
            <h1 className='text-xl font-medium'><span className='text-primary'>My</span> Skills</h1>
            </div>
            <hr />
            <div className='flex min-h-[50vh] gap-2 mt-4'>
              <div className='w-[49%] min-h-[50vh] p-4 flex flex-col gap-4 items-center text-center bg-white border-2 border-gray-200 rounded-md'>
                <div className='bg-white w-[60px] h-[60px] rounded-full flex justify-center items-center border-black border-2 shadow-lg'>
                <img src={tailwind} alt=""  className='w-[40px]'/>
                </div>
                <p className='font-semibold'>Tailwind CSS</p>
                <p className='text-gray-600'>I excel in Tailwind CSS, leveraging its utility-first approach for rapid development. Winner of two hackathons, my expertise ensures sleek, modern designs with pixel-perfect precision. Passionate about innovation, I continually push the boundaries of Tailwind CSS to deliver exceptional web experiences.</p>
              </div>
              <div className='w-[49%] min-h-[50vh] p-4 flex flex-col gap-4 items-center text-center bg-white border-2 border-gray-200 rounded-md'>
                <div className='bg-white w-[60px] h-[60px] rounded-full flex justify-center items-center border-black border-2 shadow-lg'>
                <img src={js} alt=""  className='w-[40px]'/>
                </div>
                <p className='font-semibold'>JavaScript</p>
                <p className='text-gray-600'>Mastering JavaScript, I wield its power to craft dynamic and interactive web experiences. With expertise in modern frameworks and libraries, I create seamless frontend solutions that captivate users and elevate digital experiences.</p>
              </div>
              
            </div>
            <div className='flex min-h-[50vh] gap-2'>
              <div className='w-[49%] min-h-[50vh]  p-4 flex flex-col gap-4 items-center text-center bg-white border-2 border-gray-200 rounded-md'>
                <div className='bg-white w-[60px] h-[60px] rounded-full flex justify-center items-center border-black border-2 shadow-lg'>
                <img src={react} alt=""  className='w-[40px]'/>
                </div>
                <p className='font-semibold'>React JS</p>
                <p className='text-gray-600'>I architect intuitive user interfaces with unmatched precision. Leveraging the latest in React development, I deliver responsive, high-performance web applications that engage audiences and drive results, setting new standards for user-centric design.</p>
              </div>
              <div className='w-[49%] min-h-[50vh]  p-4 flex flex-col gap-4 items-center text-center bg-white border-2 border-gray-200 rounded-md'>
                <div className='bg-white w-[60px] h-[60px] rounded-full flex justify-center items-center border-black border-2 shadow-lg'>
                <img src={node} alt=""  className='w-[40px]'/>
                </div>
                <p className='font-semibold'>Node JS</p>
                <p className='text-gray-600'>Navigating the complexities of server-side JavaScript, Node.js is my compass. Harnessing its asynchronous power, I develop fast, scalable backend systems that seamlessly integrate with frontend technologies.</p>
              </div>
              
            </div>
            <div className='flex min-h-[50vh] gap-2'>
              <div className='w-[49%] min-h-[50vh]  p-4 flex flex-col gap-4 items-center text-center bg-white border-2 border-gray-200 rounded-md'>
                <div className='bg-white w-[60px] h-[60px] rounded-full flex justify-center items-center border-black border-2 shadow-lg'>
                <img src={express} alt=""  className='w-[40px]'/>
                </div>
                <p className='font-semibold'>Express</p>
                <p className='text-gray-600'>In the realm of backend development, Express is my forte. With Express.js, I build robust APIs and scalable server-side applications that form the backbone of modern web ecosystems. From routing to middleware, my solutions are efficient, secure, and tailored to meet the demands of today's digital landscape.</p>
              </div>
              <div className='w-[49%] min-h-[50vh]  p-4 flex flex-col gap-4 items-center text-center bg-white border-2 border-gray-200 rounded-md'>
                <div className='bg-white w-[60px] h-[60px] rounded-full flex justify-center items-center border-black border-2 shadow-lg'>
                <img src={postgres} alt=""  className='w-[40px]'/>
                </div>
                <p className='font-semibold'>PostgreSQL</p>
                <p className='text-gray-600'> I design and optimize database solutions that power mission-critical applications. Leveraging SQL expertise, I model complex data structures and implement efficient queries to ensure data integrity and performance. With PostgreSQL, I build scalable, reliable data solutions that empower businesses to thrive in the digital age.</p>
              </div>
              
            </div>
        </div>
    </div>
  )
}
 
export default About
