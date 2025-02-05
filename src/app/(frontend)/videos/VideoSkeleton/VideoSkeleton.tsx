import React from 'react'
import './VideoSkeleton.css'

function VideoSkeleton() {
  return (
    <div className="card max-w-md w-[400px] mt-4">
      <div className="card-img skeleton"></div>
      <div className="card-body">
        <h2 className="card-title skeleton"></h2>
        <p className="card-intro skeleton"></p>
      </div>
    </div>
  )
}

export default VideoSkeleton
