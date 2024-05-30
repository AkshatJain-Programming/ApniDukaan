import React from 'react'
import react from '../assets/react.svg'

const Footer = () => {
  return (
    <div className='bg-gray-900 w-full flex justify-center items-center text-white h-[60px] text-lg gap-2'>
      <p>Made with ❤️ By <span className='text-blue-300'><a href="https://github.com/AkshatJain-Programming">AKSHAT JAIN</a></span> Using</p>
        <img className='w-6' src="/vite.svg" alt="" />
        <img className='w-6' src={react} alt="" />
    </div>
  )
}

export default Footer
