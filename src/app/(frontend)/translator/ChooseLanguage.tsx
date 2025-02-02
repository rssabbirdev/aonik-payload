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
          <h3 className="md:text-3xl text-lg text-primary">Choose language:</h3>
          <IoVolumeHigh className="-mt-4 text-lg" />
        </div>
        <div>
          <label htmlFor="HeadlineAct" className="block text-sm md:text-base">
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
            <optgroup label="United State of America">
              <option value="English">English</option>
            </optgroup>

            <optgroup label="Bangladesh">
              <option value="Bangla">Bangla</option>
            </optgroup>

            <optgroup label="India">
              <option value="Hindi">Hindi</option>
            </optgroup>
          </select>
        </div>
      </div>
      <div className="text-right">
        <div className="flex items-center gap-3 -mt-3">
          <IoVolumeHigh className="-mt-4 text-lg rotate-180" />
          <h3 className="md:text-3xl text-lg text-primary">:اختر لغتك</h3>
        </div>
        <div>
          <label htmlFor="HeadlineAct" className="block text-sm md:text-base">
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
            <optgroup label="United Arab Emirates">
              <option value="Arabic">Arabic</option>
            </optgroup>
          </select>
        </div>
      </div>
    </div>
  )
}

export default ChooseLanguage
