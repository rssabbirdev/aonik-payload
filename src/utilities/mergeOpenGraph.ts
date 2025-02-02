import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'For help new patient who are unfamiliar to hospital rooms',
  images: [
    {
      url: `${getServerSideURL()}/aonik-preview.png`,
    },
  ],
  siteName: 'Aonik - Smart Hospital App',
  title: 'Guiding you to better health',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
