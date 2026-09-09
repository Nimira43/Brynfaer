import { useEffect, useState } from 'react'
import type { Product } from '../models/product'
import Catalog from '../../features/catalog/Catalog'
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import NavBar from './NavBar'

function App() { 
  const [products, setProducts] = useState<Product[]>([])
  const [darkMode, setDarkMode] = useState(false)
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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}    
      />
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
          <Catalog products={products}/>     
        </Container>   
      </Box>
    </ThemeProvider>
  )
}

export default App