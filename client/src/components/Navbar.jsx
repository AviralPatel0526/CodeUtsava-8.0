import React from 'react'
import { FaUser, FaPaintbrush, FaFileLines, FaBimobject,FaCommentDots } from "react-icons/fa6";
function Navbar() {
  return (
    <div className=''>
      <div className='w-[70px] h-[350px] bg-white rounded-md flex flex-col font-poppins'>
      <div className='group font'>
      <a href="#" className="flex flex-col items-center justify-center h-[70px] w-full gap-1">
      <FaUser className="text-gray-900 group-hover:text-primary" />
      <p className="text-gray-900 group-hover:text-primary text-xs">ABOUT</p>
      </a> 
      <hr/>
      </div>
      <div className='group'>
      <a href="#" className="flex flex-col items-center justify-center h-[70px] w-full gap-1">
      <FaFileLines className="text-gray-900 group-hover:text-primary" />
      <p className="text-gray-900 group-hover:text-primary text-xs">RESUME</p>
      </a> 
      <hr/>
      </div>
      <div className='group'>
      <a href="#" className="flex flex-col items-center justify-center h-[70px] w-full gap-1">
      <FaPaintbrush className="text-gray-900 group-hover:text-primary" />
      <p className="text-gray-900 group-hover:text-primary text-xs">WORKS</p>
      </a> 
      <hr/>
      </div>
      <div className='group'>
      <a href="#" className="flex flex-col items-center justify-center h-[70px] w-full gap-1">
      <FaBimobject className="text-gray-900 group-hover:text-primary" />
      <p className="text-gray-900 group-hover:text-primary text-xs">BLOG</p>
      </a> 
      <hr/>
      </div>
      <div className='group'>
      <a href="#" className="flex flex-col items-center justify-center h-[70px] w-full gap-1">
      <FaCommentDots className="text-gray-900 group-hover:text-primary" />
      <p className="text-gray-900 group-hover:text-primary text-xs">CONTACT</p>
      </a> 
      </div>

      </div>
    </div>
  )
}

export default Navbar
