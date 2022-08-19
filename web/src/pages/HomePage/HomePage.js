import { useRef } from 'react'

import Group from 'pixelarticons/svg/group.svg'
import Contact from 'pixelarticons/svg/contact.svg'
import {
  Avatar,
  Box,
  Button,
  Slide,
  Grid,
  Stack,
  Typography,
  SvgIcon,
  Container,
} from '@mui/material'
import { TypeAnimation } from 'react-type-animation'

import { MetaTags } from '@redwoodjs/web'
import useScrolling from 'src/hooks/UseScrolling'
import useMoveScroll from 'src/hooks/MoveScroll'

const HomePage = () => {
  const projectsSection = useRef()

  const scrolling = useScrolling()
  const moveScroll = useMoveScroll()

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Box bgcolor="rgba(0, 0, 0, 0.3)">
        <Container>
          <Grid container height="100vh">
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              display="flex"
              justifyContent="center"
              flexDirection="column"
            >
              <Slide direction="down" in={!scrolling} unmountOnExit>
                <Typography variant="h3">seokku</Typography>
              </Slide>
              <Typography variant="h4">
                <TypeAnimation
                  sequence={[
                    "hi, i'm seokku",
                    300,
                    "hi, i'm seokku blendwr :D",
                  ]}
                  speed={70}
                  wrapper="span"
                  repeat={0}
                />
              </Typography>
              <Stack spacing={1} direction="row" pt={4}>
                <Button
                  variant="contained"
                  startIcon={<SvgIcon component={Contact} inheritViewBox />}
                >
                  Contact
                </Button>
                <Button
                  variant="text"
                  startIcon={<SvgIcon component={Group} inheritViewBox />}
                  color="secondary"
                  onClick={() => moveScroll.moveTo(projectsSection)}
                >
                  Projects
                </Button>
              </Stack>
            </Grid>
            <Grid
              item
              xs={6}
              display={{ xs: 'none', lg: 'flex', md: 'flex' }}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Avatar
                src="https://avatars.githubusercontent.com/u/106341703?v=4"
                alt=""
                sx={{ width: 150, height: 150 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Box pt={8} />
        <Typography variant="h3" ref={projectsSection}>
          Projects :0
        </Typography>

        {/* <Button
            variant="text"
            startIcon={<SvgIcon component={Group} inheritViewBox />}
            color="secondary"
            component="a"
            href={routes.projects()}
            LinkComponent={Link}
          >
            Projects
          </Button> */}
        <Box height={500} />
      </Container>
    </>
  )
}

export default HomePage
