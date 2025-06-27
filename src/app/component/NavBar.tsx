import Image from 'next/image'
import React from 'react'

export default function NavBar() {
  return (
    <div>
      <nav className=' m-auto'>
        <ul className='flex flex-row items-center justify-between font-semibold px-16 py-8 text-black'>
            <li className='text-4xl text-orange-600 font-extrabold font-serif'>BeFit</li>
            <li className='hover:border-b-4  border-b-orange-600 '>CERTIFICATION</li>
            <li className='hover:border-b-4  border-b-orange-600 '>EDUCATION</li>
            <li className='hover:border-b-4  border-b-orange-600 '>RESOURCES</li>
            <li className='hover:border-b-4  border-b-orange-600 '>ABOUT</li>
            <li className='hover:border-b-4  border-b-orange-600 '>BEFIT IMPACT</li>
        </ul>
      </nav>

      <div className='relative'>
        <Image src={"/banner-image.jpg"} alt='Fitness banner image' width={1400} height={400} className='object-cover w-full bg-black/70'/>
        <div className='absolute inset-0 flex items-center justify-center text-white'>
            <h1 className='text-7xl font-serif'>BeFit Fitness & Healthy Lifestyle Blog</h1>
        </div>
        
      </div>
    </div>
  )
}
