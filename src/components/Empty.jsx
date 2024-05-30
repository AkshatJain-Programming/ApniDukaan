import React, {useRef} from 'react'
import { NavLink } from 'react-router-dom'

const Empty = () => {
    
    const cartRef = useRef(null)
    return (
        <div ref={cartRef} className='empty-cart w-full h-[100vh] flex flex-col justify-center items-center gap-8 '>
        <p className='text-4xl font-semibold'>Your Cart is empty!</p>
        <NavLink to='/' className='text-4xl border rounded-full bg-blue-700 text-white p-5 px-8'>SHOP NOW</NavLink>
        </div>
    )
}

export default Empty;
