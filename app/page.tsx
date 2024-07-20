"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import FAQs from "@/components/FAQs";
import EncryptButton from "@/components/Button";



export default function Home() {
  return (
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
          className="z-1"
          src="/_pycoin.png"
          alt="hero-section"
          fill={true}
          objectFit="contain"
        />
        
        <div className="gradient-overlay bottom-gradient" />
        <div className="relative flex flex-col pt-[340px] items-center">
          <p className="text-white text-[32px] font-light ">Join a community </p>
          <p className="text-white text-[32px] font-light ">of Builders & Founders </p>
          {/* <button className="px-7 py-3 m-3 rounded-md bg-gradient-to-r from-[#DB7B50] to-[#75422B]">Join Waitlist</button> */}
          <EncryptButton/>
       </div>
      </section>
      <section className="min-h-screen flex flex-col justify-center bg-[radial-gradient(ellipse_50%_50%_at_50%_20%,_var(--tw-gradient-stops))] from-[#442A20] via-[#261A16] to-[#000000]  ">
        <div className="flex flex-col pt-60 ">
         <h1 className="text-[#B4F364] text-[26px] text-center ">FAQs</h1>
         <div className="flex justify-center items-center">
          <FAQs/>
         </div>
         <div className="relative flex flex-col items-center pt-14 pb-32 gap-8">
          <h1 className="text-[#B4F364] text-[36px] text-center " >Still have DOUBTS</h1>
          <button className="px-20 relative py-5 m-3 rounded-[10px] text-[26px] font-normal bg-gradient-to-r from-[#B4F364] to-[#688D3A]">Connect with our Experts</button>
         </div>
         
        </div>
      </section>
      <footer className="flex justify-center items-center">
        <div className="w-[1140px] h-[181px] flex flex-row justify-around items-center bg-[#1B1919] border-t border-x border-x-[#B4F364] border-t-[#B4F364]  rounded-t-[50px]">
         <div className="">
          <Image src='/footer.png' alt="footer" width={322} height={81} />
         </div>
         <div className="flex flex-row justify-center gap-x-10 items-center">
         <Image src='/discord.svg' alt='logo' width={52} height={52} />
         <Image src='/X.svg' alt='logo' width={52} height={52} />
         <Image src='/telegram.svg' alt='logo' width={52} height={52} />
         </div>
        </div>

      </footer>

      {/* <div className=" w-full">
        <div className="gradient-overlay top-gradient" />
       
        <Image
          className="z-0"
          src="/Hero bg.png"
          alt="hero-section"
          fill={true}
          objectFit="cover"
        />
        <Image
          className="z-1"
          src="/_pycoin.png"
          alt="hero-section"
          fill={true}
          objectFit="contain"
        />
        
        <div className="gradient-overlay bottom-gradient" />
      </div>
      <div className="flex flex-1 items-center">
          <p className="text-white text-[32px] font-light ">Join a community </p>
          <p className="text-white text-[32px] font-light ">of Builders & Founders </p>
          <button className="px-7 py-3 rounded-md bg-gradient-to-r from-[#DB7B50] to-[#75422B]">Join Waitlist</button>
       </div>
       <div className="h-[500px] bg-gradient-radial from-[#DB7B50] to-[#05080C]">

       </div> */}
    </div>
  );
}
