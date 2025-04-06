import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='font-semibold text-gray-700'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12 justify-center text-sm '>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>00000 Delhi NCR <br />region near Sonipat</p>
          <p className='text-gray-500'>Tel: (000) 000-0000 <br />
          Email: docNowdev@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Careers at DocNow</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black transtion-all hover:text-white duration-500'>Explore Jobs</button>
        </div>

      </div>
    </div>
  )
}

export default Contact