import { useState } from 'react'

const useTextWrap = (initialWrap: boolean) => {
  const [isTextWrap, setIsTextWrap] = useState<boolean>(initialWrap)

  const toggleTextWrap = () => {
    setIsTextWrap((prev) => !prev)
  }

  return { isTextWrap, toggleTextWrap }
}

export default useTextWrap
