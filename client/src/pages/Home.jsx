import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className='w-[100vw] h-[100vh]  animate-bgAnimate bg-200%' style={{backgroundImage: 'linear-gradient(45deg,#50a3a2,#78cc6d)', backgroundSize: '200%'}}>
      <Navbar/>
    </div>
  )
}

export default Home
