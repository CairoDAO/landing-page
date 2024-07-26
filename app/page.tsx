"use client"
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import FAQs from "@/components/FAQs";
import EncryptButton from "@/components/Button";



export default function Home() {
  return (
    <>
    <div className="flex flex-col min-w-screen">
      
      <div className="z-10">
        <Navbar />
      </div>
      
      <section className=" flex flex-col">
        <div className="gradient-overlay top-gradient" />
        
        <Image
          className="z-0"
          src="/Hero bg.png"
          alt="hero-section"
          fill={true}
          objectFit="cover"
        />
        <Image
          className="z-1 object-cover sm:object-contain"
          src="/pycoin.svg"
          alt="hero-section"
          fill={true}
         
        />
        
        <div className="gradient-overlay bottom-gradient" />
        <div className="relative flex flex-col justify-center pt-[300px] text-center m-3">
          <p className="text-white text-[28px] sm:text-[32px] font-light ">Join a community </p>
          <p className="text-white text-[28px] sm:text-[32px] font-light ">of Builders & Founders </p>
          {/* <button className="px-7 py-3 m-3 rounded-md bg-gradient-to-r from-[#DB7B50] to-[#75422B]">Join Waitlist</button> */}
          
       </div>
       <div className="flex justify-center m-3">
        <EncryptButton/>
       </div>
      
      </section>
      <section   className="min-h-screen flex flex-col justify-center bg-[radial-gradient(ellipse_100%_90%_at_50%_-20%,_var(--tw-gradient-stops))] sm:bg-[radial-gradient(ellipse_50%_50%_at_50%_20%,_var(--tw-gradient-stops))] from-[#442A20] via-[#261A16] to-[#000000]  ">
        <div  className="flex flex-col pt-44 sm:pt-60">
         <h1 id="faq-section" className="text-[#EDAA2A] text-[28px] text-center ">FAQs</h1>
         <div className="flex  justify-center items-center">
          <FAQs/>
         </div>
         <div className="relative flex flex-col items-center pt-14 pb-32 gap-8">
          <h1 className="text-[#EDAA2A] text-[28px] sm:text-[36px] text-center " >Still have DOUBTS</h1>
          <button onClick={()=>{window.location.href='https://cal.com/hardik-sharma-tgzhtx'}}  className="px-3 relative py-4 m-3 cursor-pointer rounded-[10px] text-[20px] sm:text-[26px] font-normal bg-gradient-to-r from-[#DCC710] to-[#A7690B]">Connect with our Experts</button>
         </div>
         
         
        </div>
       
        
       
      </section>
   
      <footer  id="footer-section" className="flex justify-center items-center  relative z-10  ">
        <div className="w-[380px] sm:w-[1140px] h-[181px] flex flex-col sm:flex-row justify-around items-center bg-[#1B1919] border-t border-x border-x-[#EDAA2A] border-t-[#EDAA2A]  rounded-t-[50px]">
         <div className="w-[168px] sm:w-[322px] h-[40px] sm:h-[81px] " >
          <Image src='/logo.png' alt="footer" width={86} height={86} />
         </div>
         <div className="flex flex-row justify-center cursor-pointer gap-x-10 w-[40px] sm:w-[52px] items-center">
         <Image onClick={()=>{window.location.href='https://discord.gg/2kvtJTUF'}} src='/discord.svg' alt='logo' width={52} height={52} />
         <Image onClick={()=>{window.location.href='https://x.com/cairo_dao'}} src='/X.svg' alt='logo' width={52} height={52} />
         {/* <Image onClick={()=>{window.location.href='/'}} src='/telegram.svg' alt='logo' width={52} height={52} /> */}
         <Image onClick={()=>{window.location.href='https://cairodao.gitbook.io/cairodao/'}} src='/GitBook.png' alt='logo' width={52} height={52} />
         </div>
        </div>
        <div className="absolute bottom-0 pointer-events-none  w-full h-screen z-[-2]" >
        <Image src='/Rectangle.png' alt='ellipse' fill={true}/>
       </div>
      </footer>
    
     
      
      

    </div>
    
    </>
    
  );
}
