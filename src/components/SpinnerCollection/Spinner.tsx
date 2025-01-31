import React from 'react'
import './Spinner.css'

const SpinnerDot = ({ className }: { className: string }) => {
  return <div className={`spinnerDot ${className}`}></div>
}

export { SpinnerDot }
