import React from 'react'
import spinner from '../assets/spin.gif'

const Loader = () => {
  return (
    <div className='w-full h-[90vh] flex flex-col justify-center items-center'>
      <img className='w-[100px]' src={spinner} alt="" />
      <p className='text-lg'>Loading</p>
    </div>
  )
}

export default Loader
