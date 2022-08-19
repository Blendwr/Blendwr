import { Box, Fade } from '@mui/material'
import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

const SplashScreen = ({ progress, done }) => (
  <Box
    position="fixed"
    left={0}
    bottom={0}
    right={0}
    top={0}
    bgcolor="#000"
    color="green"
  >
    <div>
      <p>~/app&gt; npm run start</p>
      <p>mounting view {progress}%</p>
      <p>{progress !== 100 ? '' : 'opening "https://seokku.vercel.app/"...'}</p>
    </div>
  </Box>
)

const WithSplashScreen = ({ children }) => {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress !== 100) {
        setProgress(progress + 1)
      } else {
        setTimeout(() => setDone(true), 1500)
      }
    }, 30)

    return () => {
      clearInterval(interval)
    }
  }, [progress])

  return (
    <>
      {done ? children : null}
      <Fade in={!done} timeout={500}>
        <div>
          <SplashScreen progress={progress} />
        </div>
      </Fade>
    </>
  )
}

export default WithSplashScreen
