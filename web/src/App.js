import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  GlobalStyles,
} from '@mui/material'
import { purple, lime } from '@mui/material/colors'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import background from 'src/layouts/HomeLayout/background.gif'

import './index.css'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: purple,
    secondary: lime,
  },
  shape: {
    borderRadius: 21,
  },
  props: {
    MuiAppBar: {
      color: 'transparent',
    },
  },
  typography: {
    fontFamily: ['Silkscreen', 'cursive'].join(','),
  },
})

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline enableColorScheme />
    <GlobalStyles
      styles={{
        body: {
          backgroundImage: `url(https://media.giphy.com/media/JpScsr53qh6sR6dSeJ/giphy.gif)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        },
      }}
    />
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <RedwoodApolloProvider>
          <Routes />
        </RedwoodApolloProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  </ThemeProvider>
)

export default App
