import React from 'react'
import { Box, Collapsible, ResponsiveContext } from 'grommet'
import Sidelist from '../../components/sidelist/Sidelist'

const sidebarList = [
  { label: 'Animals', url: '/animals' },
  { label: 'Fruits', url: '/fruits' },
]

const Sidebar = () => {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Collapsible direction="horizontal" open={size !== 'small'}>
          <Box flex width="small" background="nordicBreeze" elevation="small" align="center">
            <Sidelist listData={sidebarList} />
          </Box>
        </Collapsible>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default Sidebar
