import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import profilePic from '../assets/profilePic.png'
import profileImgSvg from '../assets/profileImgSvg.svg'
import { FaLinkedin, FaEnvelope, FaGithub, FaSquareInstagram, FaJava } from "react-icons/fa6";
import About from '../sections/About';
import Works from '../sections/Works';

function Home() {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center animate-bgAnimate bg-200% font-poppins' style={{backgroundImage: 'linear-gradient(45deg,#50a3a2,#78cc6d)', backgroundSize: '200%'}} >
      <div className='flex justify-center items-center'>
        <div className='flex items-start h-[80vh] mr-2'>
        <Navbar/>
        </div>

        <div className='h-[80vh] w-[31vw] rounded-md flex flex-col drop-shadow-2xl'>
          <div className='h-[55%] w-full bg-slate-200 flex flex-col justify-end items-center rounded-t-md relative'>
            <img src={profilePic} alt="" className='h-[300px] w-[300px] relative top-[70px] '/>
            <img src={profileImgSvg} alt="" className='z-10'/>
            
          </div>
          <div className='h-[45%] w-full bg-white flex flex-col pt-12 justify-between  pb-5 items-center rounded-b-md  z-10'>
          <div className='flex flex-col gap-4  items-center'>
            <h2 className='font-medium text-[36px]' style={{lineHeight:'2px'}}>Aviral Patel</h2>
            <div className='overflow-x-clip'>
            <p className='relative p-0 top-5 left-0 h-[3vh] w-[full] bg-white  border-l-2 border-black animate-textType '></p>
            <p className='text-primary text-sm font-semibold' style={{letterSpacing: '3px'}}>DEVELOPER  PROGRAMMER  WEB-DESIGNER</p>
            </div>
           
            <div className='flex gap-4'>
                   <a href=""><FaLinkedin className="w-5 h-5 hover:text-primary"/></a>
                   <a href=""><FaGithub className="w-5 h-5 hover:text-primary"/></a>
                   <a href=""><FaJava className="w-5 h-5 hover:text-primary"/></a>
                   <a href=""><FaEnvelope className="w-5 h-5 hover:text-primary"/></a>
                   <a href=""><FaSquareInstagram className="w-5 h-5 hover:text-primary"/></a>
            </div>
            </div>
            <div className='flex flex-col w-full gap-5'>
            <div className='w-full'>
              <hr />
            </div>
              <button className='hover:text-primary'>Download CV</button>
            </div>
          </div>
        </div>
        <div className='w-[50vw] h-[75vh] overflow-y-auto bg-white rounded-r-md'>
            <About/>
            <Works/>
        </div>
      </div>
    </div>
  );
}

export default Home;
