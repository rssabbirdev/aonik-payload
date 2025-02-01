import type { CollectionConfig } from 'payload'

import { authenticated } from '../access/authenticated'
import { anyone } from '@/access/anyone'
import { BeforeChangeHook } from 'node_modules/payload/dist/collections/config/types'
import dayjs from 'dayjs'

const generateSerialNumber: BeforeChangeHook = async ({ req, data, operation }) => {
  if (operation === 'create') {
    const payload = req.payload
    const today = dayjs().format('YYYY-MM-DD') // Get today's date

    // Fetch the latest appointment for today
    const latestAppointment = await payload.find({
      collection: 'appointments',
      where: {
        createdAt: {
          greater_than: `${today}T00:00:00.000Z`,
          less_than: `${today}T23:59:59.999Z`,
        },
      },
      sort: '-serialNumber',
      limit: 1,
    })

    let newSerialNumber = 1 // Default starting serial for a new day

    if (latestAppointment.docs.length > 0) {
      // @ts-expect-error depth related error
      const lastSerialNumber = parseInt(latestAppointment.docs[0].serialNumber, 10)
      newSerialNumber = lastSerialNumber + 1
    }

    // Ensure serial number stays within 001-999 range
    if (newSerialNumber > 999) {
      throw new Error('Serial number limit reached (999) for today')
    }

    // Assign formatted serial number
    data.serialNumber = newSerialNumber.toString().padStart(3, '0')

    // Ensure the appointment is stored with the current date
    data.date = today
  }

  return data
}

export const Appointments: CollectionConfig = {
  slug: 'appointments',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['patientName'],
    useAsTitle: 'patientName',
  },
  fields: [
    {
      name: 'patientName',
      type: 'text',
      required: true,
    },
    {
      name: 'appointmentWith',
      type: 'relationship',
      relationTo: 'doctors',
      hasMany: false,
      required: true,
    },
    {
      name: 'emiratesId',
      type: 'number',
      required: true,
      validate: (value: any) => {
        console.log(value)
        if (Boolean(value.toString().length >= 14)) {
          return true
        } else {
          return 'Emirates ID must be 14 digits'
        }
      },
    },
    {
      name: 'serialNumber',
      type: 'text',
      unique: true,
      required: true,
      admin: { readOnly: true, position: 'sidebar' }, // Disabled in the admin panel
    },
  ],
  hooks: {
    beforeChange: [generateSerialNumber],
  },
  timestamps: true,
}
