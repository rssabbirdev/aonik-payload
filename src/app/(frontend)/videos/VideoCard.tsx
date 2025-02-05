import { Video } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function VideoCard({ video }: { video: Video }) {
  return (
    <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
      <Link href={video.videoLink} rel="noopener noreferrer" target="_blank">
        <Image
          width={192}
          height={200}
          src={video.thumbnail}
          loading="lazy"
          alt={video.title}
          className="w-full rounded-t-md"
        />
        <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
          <div className="flex-none w-10 h-10 rounded-full">
            {/* <Image
              src={items.authorLogo}
              className="w-full h-full rounded-full"
              alt={items.authorName}
            /> */}
          </div>
          <div className="ml-3">
            <span className="block text-gray-900">{video.author}</span>
            <span className="block text-gray-400 text-sm">{video.createdAt}</span>
          </div>
        </div>
        <div className="pt-3 ml-4 mr-2 mb-3">
          <h3 className="text-xl text-gray-900">{video.title}</h3>
          <p className="text-gray-400 text-sm mt-1 truncate">{video.description.slice(0, 50)}...</p>
        </div>
      </Link>
    </article>
  )
}

export default VideoCard
