import { useEffect, useState } from 'react'
import type { Product } from '../models/product'
import Catalog from '../../features/catalog/Catalog'
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material'
import NavBar from './NavBar'
import theme, { darkMode } from '../../theme'

function App() { 
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Box
        sx={{
          minHeight: '100vh',
          background: darkMode
            ? '#111111'
            : '#eaeaea'
        }}
      
      >
        <Container
          maxWidth='xl'
          sx={{marginTop: 14}}
          >  
          <Catalog products={products}/>     
        </Container>   
      </Box>
    </ThemeProvider>
  )
}

export default App