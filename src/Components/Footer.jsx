import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 my-10 text-sm'>
            {/* ---Left Section--- */}
            <div className=''>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>DocNow is a seamless online platform that lets you book doctor appointments at any hospital with just a few clicks. Easily find the right doctor, choose your preferred time, and confirm</p>
            </div>

            {/* ---Center Section--- */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/* ---Right Section--- */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 7974997180</li>
                    <li>support@docnow.com</li>
                </ul>
            </div>

        </div>
        
        {/* ---Copyright Text--- */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025 @DocNow.care - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer