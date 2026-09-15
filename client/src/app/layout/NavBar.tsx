import { DarkMode, LightMode, ShoppingCart } from '@mui/icons-material'
import { AppBar, Badge, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material'
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
      <Toolbar>
        <Typography
          variant='h6'
          component={NavLink}
          to='/'
          sx={{color: 'inherit'}}
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
        <List sx={{display: 'flex'}}>
          {midLinks.map(({ title, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={{ color: 'inherit', typography: 'h6'}}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
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
              sx={{ color: 'inherit', typography: 'h6'}}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  )
}