import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import PersonIcon from '@mui/icons-material/Person'
import DeleteIcon from '@mui/icons-material/Delete'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { removeSearch } from '../redux/actions'
import { AppState } from '../redux/store'

export const drawerWidth = 240

export default function Drawer() {
  const characters = useSelector((state: AppState) => Object.keys(state.character.data))
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDeleteCharacter = (character: string) => {
    dispatch(removeSearch(character))
  }

  const handleItemClick = (char: string) => {
    navigate(`/characters/${char}`)
  }

  return (
    <MuiDrawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <Divider />
      <List>
        {characters.map(char => (
          <ListItem
            key={char}
            secondaryAction={
              <IconButton edge="end" onClick={() => handleDeleteCharacter(char)}>
                <DeleteIcon />
              </IconButton>
            }
            onClick={() => handleItemClick(char)}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={char} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </MuiDrawer>
  )
}
