import * as React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import { Routes, Route } from 'react-router-dom'

import Appbar from './components/Appbar'
import Drawer from './components/Drawer'
import Home from './components/Home'
import Results from './components/Results'

const drawerWidth = 240

function ResponsiveDrawer(props) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Appbar />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer />
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters/:character" element={<Results />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default ResponsiveDrawer
