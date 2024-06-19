import { useState, useEffect, useRef } from 'react'

interface UseTypeWriterProps {
  text: string
  speed?: number
}

const useTypeWriter = ({ text, speed = 50 }: UseTypeWriterProps) => {
  const [displayedText, setDisplayedText] = useState<string>('')
  const [lineCount, setLineCount] = useState<number>(0)
  const [charCount, setCharCount] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const intervalId = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (typeof text === 'string') {
      if (isPlaying) {
        setDisplayedText('')
        setLineCount(0)
        setCharCount(0)
        let index = -1

        intervalId.current = setInterval(() => {
          index++
          setDisplayedText((prev) => {
            const newText = prev + text.charAt(index)
            setCharCount(newText.length)
            setLineCount(newText.split('\n').length)
            return newText
          })

          if (index >= text.length - 1) {
            clearInterval(intervalId.current!)
            setIsPlaying(false)
          }
        }, speed)

        return () => clearInterval(intervalId.current!)
      } else {
        setDisplayedText(text)
        setLineCount(text.split('\n').length)
        setCharCount(text.length)
      }
    }
  }, [text, isPlaying, speed])

  const togglePlay = () => {
    setIsPlaying((prev) => !prev)
  }

  return { displayedText, lineCount, charCount, isPlaying, togglePlay }
}

export default useTypeWriter
