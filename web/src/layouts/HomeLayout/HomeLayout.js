import { useEffect, useState } from 'react'

import Code from 'pixelarticons/svg/code.svg'
import {
  AppBar,
  Button,
  Fade,
  Slide,
  Toolbar,
  Typography,
  Box,
  SvgIcon,
} from '@mui/material'
import useScrolling from 'src/hooks/UseScrolling'

// import background from './background.gif'

const calcθ = (oldXPos, xPos, oldYPos, yPos) => {
  const dx = oldXPos - xPos
  const dy = oldYPos - yPos

  const θ = Math.atan2(dy, dx)

  return θ
}

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

const genRandom = (min, max) => {
  const difference = max - min

  let rand = Math.random()

  rand = Math.floor(rand * difference)
  rand += min

  return rand
}

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

const HomeLayout = ({ children }) => {
  const scrolling = useScrolling()
  const mousePos = useMousePos()
  const random = useRandom()

  return (
    <div>
      <Box display={{ xs: 'block', lg: 'none', md: 'none' }}>
        <img
          src="https://terraria.wiki.gg/es/images/5/59/Wandering_Eye.gif"
          style={{
            transition: 'left ease-in-out 1.5s, top ease-in-out 1.5s, transform ease-in-out .2s',
            position: 'fixed',
            left: random.xPos,
            top: random.yPos,
            transform: `rotate(${random.θ}rad)`,
            zIndex: '-100',
          }}
          alt="ojo"
        />
      </Box>
      <Box display={{ xs: 'none', lg: 'block', md: 'block' }}>
        <img
          src="https://terraria.wiki.gg/es/images/5/59/Wandering_Eye.gif"
          style={{
            transition: 'left ease-in-out .1s, top ease-in-out .1s',
            position: 'fixed',
            left: mousePos.xPos,
            top: mousePos.yPos,
            transform: `rotate(${mousePos.θ}rad)`,
            zIndex: '-100',
          }}
          alt="ojo"
        />
      </Box>
      <Box>
        <AppBar
          elevation={0}
          position="fixed"
          color={'transparent'}
          sx={{ backdropFilter: 'blur(20px)' }}
        >
          <Toolbar>
            <Slide direction="down" in={scrolling} unmountOnExit>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                seokku
              </Typography>
            </Slide>
            <Fade in={scrolling} unmountOnExit>
              <Button
                color="secondary"
                component="a"
                href="http://github.com/Blendwr"
                target="_blank"
                startIcon={<SvgIcon component={Code} inheritViewBox />}
              >
                GitHub
              </Button>
            </Fade>
          </Toolbar>
        </AppBar>
        {children}
      </Box>
    </div>
  )
}

export default HomeLayout
