import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row items-center bg-[#3f5fff] rounded-lg px-6 md:px-10 lg:px-20 gap-10 relative'>
      {/* --- Left Side --- */}
      <div className='md:w-1/2 flex flex-col justify-center items-start gap-4 py-10 md:py-[10vw]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight'>
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light  '>
          <img className='w-28' src={assets.group_profiles} alt="" />
          <p className='text-white'>
            Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block'/>
            schedule your appointment hassle-free.
          </p>
        </div>
        <a className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300' href="#speciality">Book Appointment <img className='w-3' src={assets.arrow_icon} alt="" /></a>
      </div>

      {/* --- Right Side --- */}
      <div className='md:w-1/2 absolute bottom-0 right-0 justify-center hidden md:block'>
        <img className='w-full max-w-lg h-auto rounded-lg' src={assets.header_img} alt="Doctor" />
      </div>
    </div>
  );
};

export default Header;
