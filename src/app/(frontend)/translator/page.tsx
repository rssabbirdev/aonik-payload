'use client'
import React, { useEffect, useRef, useState } from 'react'
import { IoVolumeHigh } from 'react-icons/io5'
import TranslatorButton from './TranslatorButton'
import ChooseLanguage from './ChooseLanguage'
import { getSelectedLangCode } from './getSelectedLangCode'

interface ConversationType {
  conversationFirstText: string
  conversationSecondText: string
  conversationLanguage: string
}

function TranslatorPage() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  const recognition = new SpeechRecognition()

  const chatboxRef = useRef<any>(null)
  const [firstLanguage, setFirstLanguage] = useState('English')
  const [secondLanguage, setSecondLanguage] = useState('Arabic')
  const [recording, setRecording] = useState(false)
  const [conversation, setConversation] = useState<ConversationType[]>()

  const [activeBtn, setActiveBtn] = useState<number>(0)

  const [isActive, setIsActive] = useState<boolean>(false)
  const [waitForEnd, setWaitForEnd] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // const handleSpeak = async (d: string) => {
  //   setIsLoading(true)
  //   try {
  //     // Make a POST request to your API route
  //     const response = await fetch('/api/tts', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         text: d,
  //         lang: activeBtn === 0 ? secondLanguage : firstLanguage,
  //       }),
  //     })

  //     if (!response.ok) {
  //       throw new Error('Failed to generate speech')
  //     }

  //     const data = await response.json()
  //     const audio = new Audio(data.filePath) // Replace with your audio file path
  //     audio.play().catch((error) => {
  //       console.error('Auto-play failed:', error)
  //     })

  //     setIsLoading(false)
  //   } catch (error) {
  //     console.error(error)
  //     setIsLoading(false)
  //   }
  // }

  // const handleOnRecordFirst = (language: string) => {
  //   const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  //   const recognition = new SpeechRecognition()
  //   recognition.lang = language
  //   if (isActive) {
  //     recognition?.stop()
  //     setIsActive(false)
  //     return
  //   }

  //   // speak(' ', listenVoiceBtn.currentBtn === 'personOne' ? firstLanguage : secondLanguage)

  //   recognition.onstart = function () {
  //     setIsActive(true)
  //   }

  //   recognition.onend = function () {
  //     setIsActive(false)
  //   }

  //   recognition.onresult = async function (event: any) {
  //     const transcript = event.results[0][0].transcript

  //     setTranscriptText(transcript)
  //     console.log('translate to ', activeBtn === 0 ? secondLanguage : firstLanguage)
  //     const results = await fetch('/api/translate', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         text: transcript,
  //         language: activeBtn === 0 ? secondLanguage : firstLanguage,
  //       }),
  //     }).then((r) => r.json())

  //     setTranslation(results.text)
  //     handleSpeak(results.text)
  //     console.log(results)
  //   }

  //   recognition.start()
  // }
  // const handleOnRecordSecond = (language: string) => {
  //   const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  //   const recognition = new SpeechRecognition()
  //   recognition.lang = language
  //   if (isActive) {
  //     recognition?.stop()
  //     setIsActive(false)
  //     return
  //   }

  //   // speak(' ', listenVoiceBtn.currentBtn === 'personOne' ? firstLanguage : secondLanguage)

  //   recognition.onstart = function () {
  //     setIsActive(true)
  //   }

  //   recognition.onend = function () {
  //     setIsActive(false)
  //   }

  //   recognition.onresult = async function (event: any) {
  //     const transcript = event.results[0][0].transcript

  //     setTranscriptText(transcript)
  //     console.log('translate to ', activeBtn === 0 ? secondLanguage : firstLanguage)
  //     const results = await fetch('/api/translate', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         text: transcript,
  //         language: activeBtn === 0 ? secondLanguage : firstLanguage,
  //       }),
  //     }).then((r) => r.json())

  //     setTranslation(results.text)
  //     handleSpeak(results.text)
  //     console.log(results)
  //   }

  //   recognition.start()
  // }

  const startRecording = (sourceLang: string, targetLang: string) => {
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
      alert('Speech recognition is not supported in this browser.')
      return
    }
    if (isActive) {
      recognition.stop()
      setWaitForEnd(true)

      recognition.onend = function () {
        setIsActive(false)
        setRecording(false)
        setWaitForEnd(false)
      }
      return
    }

    recognition.lang = getSelectedLangCode(sourceLang)
    recognition.onstart = function () {
      setIsActive(true)
    }

    recognition.onend = function () {
      setIsActive(false)
      setWaitForEnd(false)
      setRecording(false)
    }
    setRecording(true)

    recognition.onresult = async (event: any) => {
      setIsLoading(true)
      const text = event.results[0][0].transcript
      setRecording(true)

      // Send the text to the API for translation
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, sourceLang, targetLang }),
      })

      const data = await response.json()
      if (sourceLang === firstLanguage) {
        setConversation([
          ...(conversation ?? []),
          {
            conversationFirstText: text,
            conversationSecondText: data?.translatedText,
            conversationLanguage: sourceLang,
          },
        ])
      } else {
        setConversation([
          ...(conversation ?? []),
          {
            conversationFirstText: data?.translatedText,
            conversationSecondText: text,
            conversationLanguage: sourceLang,
          },
        ])
      }
      setIsLoading(false)
      setRecording(false)

      // Play the audio automatically
      if (data.audio) {
        const audio = new Audio(data.audio)
        audio.play()
      }
    }

    recognition.onerror = () => {
      setRecording(false)
      alert('Error with voice recognition')
      setIsActive(false)
    }
    recognition.start()
  }

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight
    }
  }, [conversation])

  return (
    <section className="container mt-10">
      <ChooseLanguage
        firstLanguage={firstLanguage}
        secondLanguage={secondLanguage}
        setFirstLanguage={setFirstLanguage}
        setSecondLanguage={setSecondLanguage}
      />
      <div
        ref={chatboxRef}
        className="overflow-y-auto h-[30vh] border rounded-3xl scroll-smooth p-5 my-10 scrollbar"
      >
        <div className="">
          {conversation?.map((c, index) => (
            <div key={index}>
              <div className={`text-left`}>
                <div className="flex">
                  <div className="bg-primary flex items-center gap-2 text-lg rounded-3xl rounded-tl-none text-white py-3 px-4">
                    <span>{c.conversationFirstText}</span>
                    <IoVolumeHigh className={`text-lg`} />
                  </div>
                </div>
              </div>
              <div className={`text-right}`}>
                <div className="flex justify-end">
                  <div className="bg-primary min-w-40 flex items-center gap-2 text-lg rounded-3xl rounded-tr-none text-white py-3 px-4">
                    <IoVolumeHigh className="text-lg rotate-180" />
                    <span>{c.conversationSecondText}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between h-10 -mt-10 px-4">
        {isLoading && <p className="">Translation Processing...</p>}
        {isLoading && <p className="">...جاري معالجة الترجمة</p>}
      </div>
      <div>
        {recording ? (
          <span className="bg-primary p-2 rounded-xl text-white text-lg">
            {waitForEnd ? 'Still Listening...' : 'Listening...'}
          </span>
        ) : (
          <span className="bg-red-600 p-2 rounded-xl text-white text-lg">Recording Off </span>
        )}
      </div>
      <TranslatorButton
        waitForEnd={waitForEnd}
        isActive={isActive}
        startRecording={startRecording}
        firstLanguage={firstLanguage}
        secondLanguage={secondLanguage}
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
      />
    </section>
  )
}

export default TranslatorPage
