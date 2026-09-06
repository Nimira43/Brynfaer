import { createTheme } from '@mui/material/styles'

export const darkMode = false
const palleteType = darkMode ? 'dark' : 'light'

const theme = createTheme({
  palette: {
    primary: {
      main: '#00bfa6',
      dark: '#008c78',
      light: '#5fffe8',
      contrastText: '#fff'
    },
    secondary: {
      main: '#ff6f61',
      dark: '#cc4f45',
      light: '#ff9a8f',
      contrastText: '#fff'
    },
    mode: palleteType,
    background: {
      default: (palleteType === 'light')
        ? '#eaeaea'
        : '#111111'
    }
  },
  typography: {
    fontFamily: 'Poppins, sans-serif'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 400,
          borderRadius: 2
        }
      }
    }
  }
})

export default theme

