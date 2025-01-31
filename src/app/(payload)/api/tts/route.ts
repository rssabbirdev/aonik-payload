import fs from 'fs'
import util from 'util'
import path from 'path'
import { NextRequest } from 'next/server'
import OpenAI from 'openai'

// Define the POST method for handling text-to-speech conversion
export async function POST(req: NextRequest): Promise<Response> {
  const timestamp = Date.now()
  try {
    const body = (await req.json()) as { text: string; lang: string }
    const { text } = body

    console.log(body)

    if (!text) {
      return new Response(JSON.stringify({ error: 'Text is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
    // const speechFile = path.resolve('./output.mp3')
    const speechFile = path.join(process.cwd(), 'public', `/output.mp3`)
    const removeFile = util.promisify(fs.rm) // `fs.rm()` is better for deleting

    const mp3 = await openai.audio.speech.create({
      model: 'tts-1',
      voice: 'alloy',
      input: text,
    })

    const buffer = Buffer.from(await mp3.arrayBuffer())
    // Delete the previous file safely
    try {
      await removeFile(speechFile, { force: true }) // `force: true` ensures it won't fail if the file is missing
    } catch (error) {
      console.error('Error deleting previous file:', error)
    }

    await fs.promises.writeFile(speechFile, buffer)

    return new Response(
      JSON.stringify({ message: 'Audio generated', filePath: `/output.mp3?t=${timestamp}` }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    console.error('Error during TTS request:', error)
    return new Response(JSON.stringify({ error: 'Error generating speech' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
