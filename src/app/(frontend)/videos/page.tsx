'use client'
import React, { useEffect, useState } from 'react'
import { Video } from '@/payload-types'
import VideoCard from './VideoCard'
import VideoSkeleton from './VideoSkeleton/VideoSkeleton'

function VideoPage() {
  const [videos, setVideos] = useState<Video[]>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/videos`)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.docs)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(false)
        console.log(err)
      })
  }, [])
  console.log(videos)
  return (
    <section className="my-12 mx-auto px-4 max-w-screen-xl md:px-8">
      <div className="text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">Knowledge can save life.</h1>
        <p className="mt-3 text-gray-500">
          We worry about you, and you should also worry about your health.
        </p>
      </div>
      <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading && [1, 2, 3].map((d) => <VideoSkeleton key={d} />)}
        {videos?.map((video) => <VideoCard key={video.id} video={video} />)}
      </div>
    </section>
  )
}

export default VideoPage
