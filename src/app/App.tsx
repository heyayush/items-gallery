import React from 'react'
import './App.scss'
import { Box, Grommet } from 'grommet'
import Theme from '../styles/theme'
import Navbar from './containers/navbar/Navbar'
import Sidebar from './containers/sidebar/Sidebar'

const App: React.FC = () => {
  return (
    <Grommet theme={Theme} full>
      <Box fill>
        <Navbar></Navbar>
        <Box direction="row" flex>
          <Sidebar />
          <Box flex align="center" justify="center">
            app body
          </Box>
        </Box>
      </Box>
    </Grommet>
  )
}

export default App
