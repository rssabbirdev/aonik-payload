'use client'
import React, { Dispatch, SetStateAction } from 'react'
import { IoVolumeHigh } from 'react-icons/io5'

function ChooseLanguage({
  firstLanguage,
  secondLanguage,
  setFirstLanguage,
  setSecondLanguage,
}: {
  firstLanguage: string
  setFirstLanguage: Dispatch<SetStateAction<string>>
  secondLanguage: string
  setSecondLanguage: Dispatch<SetStateAction<string>>
}) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="flex items-center gap-3 -mt-3">
          <h3 className="text-3xl text-primary">Choose your language :</h3>
          <IoVolumeHigh className="-mt-4 text-lg" />
        </div>
        <div>
          <label htmlFor="HeadlineAct" className="block">
            {' '}
            Person One{' '}
          </label>

          <select
            onChange={(e) => setFirstLanguage(e.target.value)}
            value={firstLanguage}
            name="HeadlineAct"
            id="HeadlineAct"
            className="mt-1.5 p-3 border border-primary-foreground text-primary-foreground rounded-lg font-serif"
          >
            <option value="">Please select</option>
            <optgroup label="United State of America">
              <option value="en-US">English</option>
            </optgroup>

            <optgroup label="Bangladesh">
              <option value="bn-BD">Bangla</option>
            </optgroup>

            <optgroup label="India">
              <option value="hi-IN">Hindi</option>
            </optgroup>
          </select>
        </div>
      </div>
      <div className="text-right">
        <div className="flex items-center gap-3 -mt-3">
          <IoVolumeHigh className="-mt-4 text-lg rotate-180" />
          <h3 className="text-3xl text-primary">:اختر لغتك</h3>
        </div>
        <div>
          <label htmlFor="HeadlineAct" className="block">
            {' '}
            Person Two{' '}
          </label>

          <select
            onChange={(e) => setSecondLanguage(e.target.value)}
            value={secondLanguage}
            name="HeadlineAct"
            id="HeadlineAct"
            className="mt-1.5 p-3 border border-primary-foreground text-primary-foreground rounded-lg font-serif"
          >
            <option value="">Please select</option>
            <optgroup label="United Arab Emirates">
              <option value="ar-SR">Arabic</option>
            </optgroup>
          </select>
        </div>
      </div>
    </div>
  )
}

export default ChooseLanguage
