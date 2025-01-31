import type { CollectionConfig } from 'payload'

import { authenticated } from '../access/authenticated'
import { anyone } from '@/access/anyone'

export const Patients: CollectionConfig = {
  slug: 'patients',
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
      name: 'doctorAssigned',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
      relationTo: 'doctors',
      hasMany: false,
      required: true,
    },
    {
      name: 'emiratesId',
      type: 'number',
      admin: {
        position: 'sidebar',
      },
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
  ],
  timestamps: true,
}
