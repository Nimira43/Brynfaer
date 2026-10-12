import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from '../store/store'

function App() { 
  const { darkMode } = useAppSelector(state => state.ui)
  const palleteType = darkMode ? 'dark' : 'light'

  const theme = createTheme({
    palette: {
      primary: {
        main: '#038975',
        dark: '#005f51',
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Box
        sx={{
          minHeight: '100vh',
          background: darkMode
            ? 'radial-gradient(circle, #005f51,#00483d)'
            : 'radial-gradient(circle, #c8fff9,#e7fffc)',
          py: 6
        }}    
      >
        <Container
          maxWidth='xl'
          sx={{marginTop: 8}}
          >  
          <Outlet />     
        </Container>   
      </Box>
    </ThemeProvider>
  )
}

export default App