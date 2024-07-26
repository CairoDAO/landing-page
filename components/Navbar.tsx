import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const scrollToSection = (sectionId:string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="flex justify-between items-center  pt-[14px] pr-[14px] pl-[14px] sm:pt-[14px] sm:pr-[28px] sm:pl-[28px] ">
        
        <div className="flex-1 sm:pl-[294px] pl-[147] flex justify-center">
            <Image src='/logo.png' alt='logo' width='56' height='56' />
        </div>
        <div >
           <div className='sm:flex flex-row gap-4 hidden'>
                <Link className='text-[#DB7B50]' href='https://cairodao.gitbook.io/cairodao/'>Learn More </Link>
                <Link onClick={() => scrollToSection('faq-section')} className='text-[#DB7B50]' href='/'>FAQ</Link>
                <Link onClick={() => scrollToSection('footer-section')} className='text-[#DB7B50]' href='/'>Connect Us </Link>
           </div>
        </div>
    </div>
  )
}

export default Navbar