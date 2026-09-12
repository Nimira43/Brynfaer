import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/layout/styles.css'
import '@fontsource/poppins/100.css'
import '@fontsource/poppins/200.css'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import '@fontsource/poppins/900.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/routes/Routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider  router={router} />
  </StrictMode>,
)
