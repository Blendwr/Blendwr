import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { cyan, teal } from '@mui/material/colors'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: cyan,
    secondary: teal,
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
