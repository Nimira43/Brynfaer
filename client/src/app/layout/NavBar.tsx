import { DarkMode, LightMode, ShoppingCart } from '@mui/icons-material'
import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

const midLinks = [
  {title: 'catalog', path: '/catalog'},
  {title: 'about', path: '/about'},
  {title: 'contact', path: '/contact'}
]

const rightLinks = [
  {title: 'login', path: '/login'},
  {title: 'register', path: '/register'},
]

const navStyles = {
  color: 'inherit',
  typography: 'h6',
  textDecoration: 'none',
  '&:hover': {
    color: 'secondary.main'
  },
  '&.active': {
    color: 'secondary.main'
  }
}

type Props = {
  toggleDarkMode: () => void
  darkMode : boolean
}

export default function NavBar({
  darkMode,
  toggleDarkMode
}: Props) {
  return (
    <AppBar position='fixed'>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Typography
            variant='h6'
            component={NavLink}
            to='/'
            sx={navStyles}
            >
            <span className='logo-font'>
              Brynfaer
            </span>
          </Typography>
          <IconButton onClick={toggleDarkMode}> 
            {darkMode
              ? <DarkMode />
              : <LightMode sx={{color: 'white'}}/>
            }
          </IconButton>
        </Box>
        <List sx={{display: 'flex'}}>
          {midLinks.map(({ title, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={navStyles}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <IconButton size='large' color='inherit'>
            <Badge badgeContent='7' color='secondary'>
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{display: 'flex'}}>
            {rightLinks.map(({ title, path }) => (
              <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={navStyles}
              >
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  )
}