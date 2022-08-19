import { useEffect, useState } from 'react'
import calcθ from 'src/functions/calcTetha'
import genRandom from 'src/functions/genRandom'

const useRandom = () => {
  const [xPos, setXPos] = useState(0)
  const [yPos, setYPos] = useState(0)
  const [oldXPos, setOldXPos] = useState(0)
  const [oldYPos, setOldYPos] = useState(0)
  const [θ, setθ] = useState(0)

  const maxHeight = window.innerHeight
  const maxWidth = window.innerWidth
  const speed = 1.5
  const movingSpeed = 300

  useEffect(() => {
    const interval = setInterval(() => {
      let [rx, ry] = [genRandom(-movingSpeed, movingSpeed), genRandom(-movingSpeed, movingSpeed)]
      let nx = xPos + rx
      let ny = yPos + ry

      if (nx > maxWidth && nx !== 0) {
        nx = xPos - rx
      } else if (ny > maxHeight && ny !== 0) {
        ny = yPos - ry
      }

      if (nx < 0) {
        nx = xPos + genRandom(0, movingSpeed)
      } else if (ny < 0) {
        ny = yPos + genRandom(0, movingSpeed)
      }

      setθ(calcθ(xPos, nx, oldYPos, ny))

      setOldXPos(xPos)
      setOldYPos(yPos)

      setXPos(nx)
      setYPos(ny)
    }, speed * 1000)

    return () => clearInterval(interval)
  }, [xPos, yPos])

  return {
    xPos,
    yPos,
    oldXPos,
    oldYPos,
    θ,
  }
}

export default useRandom
