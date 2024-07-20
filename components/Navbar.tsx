import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex  justify-between items-center pt-[28px] pr-[28px] pl-[28px] ">
        
        <div className="flex-1 pl-[294px] flex justify-center">
            <Image src='/logo.png' alt='logo' width='202' height='34' />
        </div>
        <div >
           <div className='flex flex-row gap-4'>
                <Link className='text-[#DB7B50]' href='/'>Learn More </Link>
                <Link className='text-[#DB7B50]' href='/'>FAQ</Link>
                <Link className='text-[#DB7B50]' href='/'>Connect Us </Link>
           </div>
        </div>
    </div>
  )
}

export default Navbar