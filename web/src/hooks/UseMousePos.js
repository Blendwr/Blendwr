import { useEffect, useState } from 'react'
import calcθ from 'src/functions/calcTetha'

const useMousePos = () => {
  const [xPos, setXPos] = useState(0)
  const [yPos, setYPos] = useState(0)
  const [oldXPos, setOldXPos] = useState(0)
  const [oldYPos, setOldYPos] = useState(0)
  const [θ, setθ] = useState(0)

  useEffect(() => {
    const handleMove = (evt) => {
      const [oldX, oldY] = [xPos, yPos]
      const { clientX, clientY } = evt

      setθ(calcθ(oldXPos, xPos, oldYPos, yPos))

      setTimeout(() => {
        setXPos(clientX)
        setYPos(clientY)

        setOldXPos(oldX)
        setOldYPos(oldY)
      }, 50)
    }

    window.addEventListener('mousemove', handleMove)

    return () => window.removeEventListener('mousemove', handleMove)
  }, [xPos, yPos, oldXPos, oldYPos])

  return { xPos, yPos, oldXPos, oldYPos, θ }
}

export default useMousePos
