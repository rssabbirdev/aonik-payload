import Link from 'next/link'
import React from 'react'

function HomePage() {
  return (
    <section className='container'>
      <div>
        <h1 className='text-[12rem] font-bold text-primary'>Aonik</h1>
        <p className='text-2xl'>Graduation Project Presentation | Team 1</p>
      </div>
      <div className='flex justify-center items-center gap-5 mt-10'>
        <div className='flex justify-center'>
        <Link href="/appointment" className='px-10 py-4 text-lg font-bold bg-primary transition-all text-white rounded-md hover:bg-primary-foreground border border-primary'>
          Check Appointment
        </Link>
      </div>
      <div className='flex justify-center'>
        <button className='px-10 py-4 text-lg font-bold transition-all bg-white text-primary hover:text-primary-foreground border border-primary rounded-md hover:border-primary-foreground'>
          View Case Studies
        </button>
      </div>
      </div>
    </section>
  )
}

export default HomePage