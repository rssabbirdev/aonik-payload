'use client'
import AccessibleText from '@/components/AccessibleText/AccessibleText'
import React, { Dispatch, SetStateAction } from 'react'

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
  const options = ['Arabic', 'English', 'Bangla', 'Hindi', 'Spanish', 'French']
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="flex items-center gap-3 -mt-3">
          <AccessibleText text="choose language">
            <h3 className="md:text-3xl text-lg text-primary">Choose language:</h3>
          </AccessibleText>
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
            {options
              ?.filter((option) => option !== secondLanguage)
              ?.map((op) => (
                <option key={op} value={op}>
                  {op}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="text-right">
        <div className="flex items-center gap-3 -mt-3">
          <AccessibleText text="اختر لغتك" lang="ar-SA" buttonPosition="left">
            <h3 className="md:text-3xl text-lg text-primary">:اختر لغتك</h3>
          </AccessibleText>
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
            {options
              ?.filter((option) => option !== firstLanguage)
              ?.map((op) => (
                <option key={op} value={op}>
                  {op}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default ChooseLanguage
