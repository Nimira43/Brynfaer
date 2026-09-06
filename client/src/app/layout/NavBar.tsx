import { AppBar, Toolbar, Typography } from '@mui/material'

export default function NavBar() {
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Typography variant='h6'>
          <span className='logo-font'>
            Brynfaer
          </span>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}