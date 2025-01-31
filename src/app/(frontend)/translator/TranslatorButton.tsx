'use client'
import { FaMicrophoneAlt, FaMicrophoneAltSlash } from 'react-icons/fa'

function TranslatorButton({
  startRecording,
  firstLanguage,
  secondLanguage,
  isActive,
  activeBtn,
  setActiveBtn,
}: {
  startRecording: (sourceLang: string, targetLang: string) => void
  firstLanguage: string
  secondLanguage: string
  isActive: boolean
  activeBtn: number
  setActiveBtn: (num: number) => void
}) {
  return (
    <div className="flex gap-20 items-center justify-center mt-10">
      <div className="flex flex-col justify-center items-center gap-3">
        <button
          onClick={() => {
            setActiveBtn(0)
            startRecording('English', 'Arabic')
          }}
          className={`p-6 text-4xl font-bold transition-all rounded-full border text-white cursor-pointer ${activeBtn === 0 && isActive ? 'bg-red-500 border-red-500' : 'bg-primary border-primary'}`}
        >
          {activeBtn === 0 && isActive ? <FaMicrophoneAltSlash /> : <FaMicrophoneAlt />}
        </button>
        <p className="font-serif text-sm">
          {activeBtn === 0 && isActive ? 'Listening....' : 'Say Person One'}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <button
          onClick={() => {
            setActiveBtn(1)
            startRecording('Arabic', 'English')
          }}
          className={`p-6 text-4xl font-bold transition-all rounded-full border text-white cursor-pointer ${activeBtn === 1 && isActive ? 'bg-red-500 border-red-500' : 'bg-primary border-primary'}`}
        >
          {activeBtn === 1 && isActive ? <FaMicrophoneAltSlash /> : <FaMicrophoneAlt />}
        </button>
        <p className="font-serif text-sm">
          {activeBtn === 1 && isActive ? 'Listening....' : 'Say Person Two'}
        </p>
      </div>
    </div>
  )
}

export default TranslatorButton
