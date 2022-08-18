import { useEffect, useState } from 'react'

import Code from 'pixelarticons/svg/code.svg'
import Contact from 'pixelarticons/svg/contact.svg'
import {
  AppBar,
  Button,
  Fade,
  Slide,
  Toolbar,
  Typography,
  Box,
  SvgIcon,
  Fab,
  Container,
} from '@mui/material'
import { Parallax } from 'react-parallax'
// import useScrolling from 'src/hooks/UseScrolling'

import background from './background.gif'

// const useMousePos = () => {
//   const [xPos, setXPos] = useState(0)
//   const [yPos, setYPos] = useState(0)
//   const [directionX, setDirectionX] = useState('left')
//   const [directionY, setDirectionY] = useState('top')
//   const [wanderingEyeDirection, setWanderingEyeDirection] = useState('0deg')

//   useEffect(() => {
//     const changeWanderingEyeDirection = () => {
//       if (directionX == 'left' && directionY == 'top') {
//         setWanderingEyeDirection('45deg')
//       } else if (directionX == 'right' && directionY == 'top') {
//         setWanderingEyeDirection('135deg')
//       } else if (directionX == 'left' && directionY == 'bottom') {
//         setWanderingEyeDirection('-45deg')
//       } else if (directionX == 'right' && directionY == 'bottom') {
//         setWanderingEyeDirection('-135deg')
//       }
//     }

//     const handleMove = (evt) => {
//       const [oldX, oldY] = [xPos, yPos]
//       const { clientX, clientY } = evt

//       if (oldX > clientX) {
//         setDirectionX('left')
//       } else {
//         setDirectionX('right')
//       }

//       if (oldY > clientY) {
//         setDirectionY('top')
//       } else {
//         setDirectionY('bottom')
//       }

//       setXPos(clientX)
//       setYPos(clientY)
//       changeWanderingEyeDirection()
//     }

//     window.addEventListener('mousemove', handleMove)

//     return () => window.removeEventListener('mousemove', handleMove)
//   }, [xPos, yPos, directionX, directionY])

//   return { xPos, yPos, directionX, directionY, wanderingEyeDirection }
// }

const HomeLayout = ({ children }) => {
  // const scrolling = useScrolling()
  // const mousePos = useMousePos()

  return (
    <div>
      <Parallax
        bgImage={background}
        blur={10}
        bgImageAlt="background"
        strength={200}
      >
        {/* <img
          src="https://terraria.wiki.gg/es/images/5/59/Wandering_Eye.gif"
          style={{
            transition: 'all ease 1s',
            position: 'fixed',
            left: mousePos.xPos,
            top: mousePos.yPos,
            transform: `rotate(${mousePos.wanderingEyeDirection})`,
            zIndex: 'inherit',
          }}
          alt="ojo"
        /> */}
        <Box>
          <AppBar
            elevation={0}
            position="fixed"
            color={'transparent'}
            sx={{ backdropFilter: 'blur(20px)' }}
          >
            <Toolbar>
              {/* <Slide direction="down" in={scrolling} unmountOnExit> */}
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                  ceeeeeesar
                </Typography>
              {/* </Slide> */}
              {/* <Fade in={scrolling} unmountOnExit> */}
                <Button
                  color="secondary"
                  component="a"
                  href="http://github.com/Blendwr"
                  target="_blank"
                  startIcon={<SvgIcon component={Code} inheritViewBox />}
                >
                  GitHub
                </Button>
              {/* </Fade> */}
            </Toolbar>
          </AppBar>
          <Container>{children}</Container>
          <Fab
            variant="extended"
            color="primary"
            sx={{ position: 'fixed', bottom: 10, right: 10 }}
          >
            <SvgIcon component={Contact} inheritViewBox sx={{ mr: 1 }} />
            Contact
          </Fab>
        </Box>
      </Parallax>
    </div>
  )
}

export default HomeLayout
