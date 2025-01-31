// import { NextRequest, NextResponse } from 'next/server'
// import OpenAI from 'openai'

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// })

// export async function POST(request: NextRequest) {
//   const { text, language } = await request.json()
//   console.log('form server translate', language, text)
//   const response = await openai.chat.completions.create({
//     model: 'gpt-4o-mini',
//     messages: [
//       {
//         role: 'system',
//         content: `
//         You will be provided with a sentence. Your tasks are to:
//         - Detect what language the sentence is in
//         - Translate the sentence into ${language}
//         Do not return anything other than the translated sentence.
//         Also do not act oversmart, if someone said others language do not convert with that langauge expect ${language} something
//       `,
//       },
//       {
//         role: 'user',
//         content: text,
//       },
//     ],
//     temperature: 0.7,
//     max_tokens: 64,
//     top_p: 1,
//   })
//   return NextResponse.json({
//     text: response?.choices[0]?.message?.content,
//   })
// }

import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { TextToSpeechClient } from '@google-cloud/text-to-speech'
import util from 'util'
import fs from 'fs'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Set in .env.local
})

const client = new TextToSpeechClient({ keyFilename: './google-service-account.json' })

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') return NextResponse.json({ message: 'Method Not Allowed' })

  const { text, sourceLang, targetLang } = await req.json()

  try {
    // Translate the text
    const translation = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `
        You will be provided with a ${sourceLang} sentence. Your tasks are to:
        - Translate the sentence into ${targetLang}
        Do not return anything other than the translated sentence.
        Also do not act oversmart, if someone said others language do not convert with that langauge expect ${targetLang} something
      `,
        },
        {
          role: 'user',
          content: text,
        },
      ],
      temperature: 0.7,
      max_tokens: 64,
      top_p: 1,
    })

    const translatedText = translation.choices[0]?.message?.content || 'Translation failed'

    // Convert text to speech
    // const audioResponse = await openai.audio.speech.create({
    //   model: 'tts-1',
    //   input: translatedText,
    //   voice: targetLang === 'English' ? 'alloy' : 'onyx',
    // })
    const [response] = await client.synthesizeSpeech({
      input: { text: translatedText },
      voice: { languageCode: targetLang === 'English' ? 'en-US' : 'ar-XA', ssmlGender: 'NEUTRAL' },
      audioConfig: { audioEncoding: 'MP3' },
    })

    console.log('response', response)

    const writeFile = util.promisify(fs.writeFile)

    const filePath = `./public/output.mp3` // Save the audio to the public folder

    await writeFile(filePath, response.audioContent as string, 'binary')

    return new NextResponse(
      JSON.stringify({
        translatedText,
        filePath: `/output.mp3?${new Date()}`,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  } catch (error) {
    return NextResponse.json({ message: 'Error processing request', error })
  }
}
