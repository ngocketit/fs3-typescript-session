import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import LinearProgress from '@mui/material/LinearProgress'
import { useSelector } from 'react-redux'

import {drawerWidth} from './Drawer'

export default function Appbar() {
  const loading = useSelector(state => state.character.loading)

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Starwars
        </Typography>
      </Toolbar>
      {loading && <LinearProgress color="secondary" />}
    </AppBar>
  )
}
