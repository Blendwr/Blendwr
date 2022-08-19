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
import useMousePos from 'src/hooks/UseMousePos'
import useRandom from 'src/hooks/UseRandom'
import WithSplashScreen from 'src/hooks/WithSplashScreen'

// import background from './background.gif'

const HomeLayout = ({ children }) => {
  const scrolling = useScrolling()
  const mousePos = useMousePos()
  const random = useRandom()

  return (
    <WithSplashScreen>
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
    </WithSplashScreen>
  )
}

export default HomeLayout
