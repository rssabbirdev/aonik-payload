import React from 'react'
import { IoLocationSharp, IoVolumeHigh } from "react-icons/io5";
import { LuIdCard } from "react-icons/lu";
import { FaUserDoctor } from "react-icons/fa6";
import Link from 'next/link';

function AppointmentPage() {
  return (
    <>
    <section className='container text-3xl flex flex-col justify-center items-center gap-5 mt-10'>
      <h3 className='mb-3 text-primary'>Enter your Emirates ID number:</h3>
      <div className="flex items-center gap-3">
        <LuIdCard className="text-5xl text-primary" />
        <input className='bg-primary text-white text-xl font-bold border-none outline-none rounded-full py-3 px-2 placeholder:text-white font-serif [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type="number" placeholder='784-####-######-#' />
       <IoVolumeHigh  className='-mt-4 text-lg'/>
      </div>
      <button className='px-10 py-3 text-lg font-bold transition-all bg-white text-primary hover:text-primary-foreground border border-primary rounded-md hover:border-primary-foreground'>
        Search Appointment
      </button>
      </section>
      <section className='mt-10 container flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex items-center gap-3 -mt-3'>
            <h3 className="text-3xl text-primary">Your doctor name is :</h3>
            <IoVolumeHigh  className='-mt-4 text-lg'/>
          </div>
          <FaUserDoctor className="text-7xl" />
          <h2 className="text-lg text-primary">Dr. Mary Johnson</h2>
          <h3 className="text-xl text-primary">Please proceed to room number 3, your serial number 123</h3>
        </div>
        <Link href="/navigation" className='px-10 py-4 text-2xl mt-5 font-bold bg-primary transition-all text-white rounded-md hover:bg-primary-foreground border border-primary flex justify-center items-center gap-1'>
         <span> <IoLocationSharp /></span> <span>Location Guide</span>
        </Link>
      </section>
    </>
  )
}

export default AppointmentPage