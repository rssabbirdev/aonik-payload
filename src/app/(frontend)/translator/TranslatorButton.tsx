'use client'
import { FaMicrophoneAlt, FaMicrophoneAltSlash } from 'react-icons/fa'

function TranslatorButton({
  startRecording,
  firstLanguage,
  secondLanguage,
  isActive,
  activeBtn,
  setActiveBtn,
  waitForEnd,
}: {
  startRecording: (sourceLang: string, targetLang: string) => void
  firstLanguage: string
  secondLanguage: string
  isActive: boolean
  activeBtn: number
  setActiveBtn: (num: number) => void
  waitForEnd: boolean
}) {
  return (
    <div className="flex gap-20 items-center justify-center my-16">
      <div className="flex flex-col justify-center items-center gap-3">
        <button
          disabled={waitForEnd}
          onClick={() => {
            setActiveBtn(0)
            startRecording(firstLanguage, secondLanguage)
          }}
          className={`p-6 text-4xl font-bold transition-all rounded-full border text-white cursor-pointer ${activeBtn === 0 && isActive ? 'bg-red-500 border-red-500' : 'bg-primary border-primary'}`}
        >
          {activeBtn === 0 && isActive ? <FaMicrophoneAltSlash /> : <FaMicrophoneAlt />}
        </button>
        <p className="font-serif text-sm">
          {waitForEnd && activeBtn === 0
            ? 'Wait Stopping...'
            : activeBtn === 0 && isActive
              ? 'Listening....'
              : `Say ${firstLanguage}`}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <button
          disabled={waitForEnd}
          onClick={() => {
            setActiveBtn(1)
            startRecording(secondLanguage, firstLanguage)
          }}
          className={`p-6 text-4xl font-bold transition-all rounded-full border text-white cursor-pointer ${activeBtn === 1 && isActive ? 'bg-red-500 border-red-500' : 'bg-primary border-primary'}`}
        >
          {activeBtn === 1 && isActive ? <FaMicrophoneAltSlash /> : <FaMicrophoneAlt />}
        </button>
        <p className="font-serif text-sm">
          {waitForEnd && activeBtn === 1
            ? 'Wait Stopping...'
            : activeBtn === 1 && isActive
              ? 'Listening....'
              : `Say ${secondLanguage}`}
        </p>
      </div>
    </div>
  )
}

export default TranslatorButton
