import React from 'react'
import { Box, Collapsible, ResponsiveContext } from 'grommet'
import Sidelist from '../../components/sidelist/Sidelist'

const sidebarList = ['Animals', 'Fruits']

const Sidebar = () => {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Collapsible direction="horizontal" open={size !== 'small'}>
          <Box flex width="small" background="light-2" elevation="small" align="center">
            <Sidelist listData={sidebarList} />
          </Box>
        </Collapsible>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default Sidebar
