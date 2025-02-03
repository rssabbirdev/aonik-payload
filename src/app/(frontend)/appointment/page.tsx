'use client'
import React, { useState } from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { LuIdCard } from 'react-icons/lu'
import { FaUserDoctor } from 'react-icons/fa6'
import Link from 'next/link'
import { Appointment } from '@/payload-types'
import AccessibleText from '@/components/AccessibleText/AccessibleText'

function AppointmentPage() {
  const [eid, setEid] = useState('')
  const [appointment, setAppointment] = useState<Appointment>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState('')
  const today = new Date().toISOString().split('T')[0]
  console.log(today)
  console.log(eid)
  const handleSearchAppointment = (eidText: string) => {
    setError('')
    if (eidText?.length === 14) {
      setIsLoading(true)
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/appointments?where[emiratesId][equals]=${eidText}&where[createdAt][greater_than]=${today}T00:00:00.000Z&where[createdAt][less_than]=${today}T23:59:59.999Z&sort=-createdAt&limit=1`,
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setAppointment(data?.docs[0])
          setIsLoading(false)
          if (!data?.docs[0]?.id) {
            setError('No Appointment Found For Today!')
          }
        })
        .catch((error) => {
          setIsLoading(false)
          console.log(error)
        })
    }
  }

  return (
    <>
      {!appointment?.id && (
        <section className="container text-3xl flex flex-col justify-center items-center gap-5 mt-10">
          <h3 className="mb-3 text-primary">Enter your Emirates ID number:</h3>
          <div className="flex items-center gap-3">
            <LuIdCard className="text-5xl text-primary" />
            <AccessibleText text="Enter your emirates ID number here in this box">
              <input
                onChange={(e) => setEid(e.target.value)}
                className="bg-primary text-white text-xl font-bold border-none outline-none rounded-full py-3 px-2 placeholder:text-white font-serif [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                type="text"
                placeholder="784-####-######-#"
                maxLength={14}
                minLength={14}
              />
            </AccessibleText>
          </div>
          <button
            disabled={eid?.length !== 14 || isLoading}
            onClick={() => handleSearchAppointment(eid)}
            className="px-10 py-3 text-lg font-bold transition-all bg-white text-primary hover:text-primary-foreground border border-primary rounded-md hover:border-primary-foreground"
          >
            {isLoading ? 'Loading...' : 'Search Appointment'}
          </button>
        </section>
      )}
      {appointment?.id && (
        <section className="mt-10 container flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center gap-3 -mt-3">
              <AccessibleText
                /*@ts-expect-error depth related error*/
                text={`Your Doctor name is ${appointment.appointmentWith?.doctorName}`}
              >
                <h3 className="text-3xl text-primary">Your doctor name is :</h3>
              </AccessibleText>
            </div>
            <FaUserDoctor className="text-7xl" />
            {/*@ts-expect-error depth related error*/}
            <h2 className="text-lg text-primary">{appointment.appointmentWith?.doctorName}</h2>

            <AccessibleText
              /*@ts-expect-error depth related error*/
              text={`Please proceed to room number ${appointment.appointmentWith?.room}, your serial number is ${appointment.serialNumber}`}
            >
              <h3 className="text-xl text-primary">
                Please proceed to room number {/*@ts-expect-error depth related error*/}
                <span className="font-bold">{appointment.appointmentWith.room}</span>, your serial
                number
                <span className="font-bold"> {appointment.serialNumber}</span>
              </h3>
            </AccessibleText>
          </div>
          <Link
            href="/navigation"
            className="px-10 py-4 text-2xl mt-5 font-bold bg-primary transition-all text-white rounded-md hover:bg-primary-foreground border border-primary flex justify-center items-center gap-1"
          >
            <span>
              {' '}
              <IoLocationSharp />
            </span>{' '}
            <span>Location Guide</span>
          </Link>
        </section>
      )}
      {!appointment?.id && error && !isLoading && (
        <h2 className="mt-10 text-red-600 text-center">{error}</h2>
      )}
    </>
  )
}

export default AppointmentPage
