'use client'
import ComingSoon from '@/components/ComingSoon/ComingSoon'
import React, { useEffect, useState } from 'react'
import Player from './Player'
import { Video } from '@/payload-types'

function VideoPage() {
  const [videos, setVideos] = useState<Video[]>()

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/videos`)
      .then((res) => res.json())
      .then((data) => setVideos(data.docs))
      .catch((err) => {
        console.log(err)
      })
  }, [])
  console.log(videos)
  return (
    <div>
      <ComingSoon />
      {videos?.map((v) => <Player key={v.id} link={v.videoLink} title={v.title} />)}
    </div>
  )
}

export default VideoPage
