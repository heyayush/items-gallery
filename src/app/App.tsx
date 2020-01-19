import React from 'react'
import './App.scss'
import { Box, Grommet } from 'grommet'
import Theme from '../styles/theme'
import Navbar from './containers/navbar/Navbar'
import Sidebar from './containers/sidebar/Sidebar'
import Gallery from './containers/gallery/Gallery'
import { BrowserRouter as Router } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Grommet theme={Theme} full>
      <Router>
        <Box fill>
          <Navbar></Navbar>
          <Box direction="row" flex>
            <Sidebar />
            <Box flex align="center" justify="center">
              <Gallery />
            </Box>
          </Box>
        </Box>
      </Router>
    </Grommet>
  )
}

export default App
