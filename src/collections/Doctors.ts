import type { CollectionConfig } from 'payload'

import { authenticated } from '../access/authenticated'
import { anyone } from '@/access/anyone'

export const Doctors: CollectionConfig = {
  slug: 'doctors',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['doctorName', 'specialization', 'room'],
    useAsTitle: 'doctorName',
  },
  fields: [
    {
      name: 'doctorName',
      type: 'text',
      required: true,
    },
    {
      name: 'specialization',
      type: 'text',
    },
    {
      name: 'room',
      type: 'text',
      required: true,
    },
  ],
}
