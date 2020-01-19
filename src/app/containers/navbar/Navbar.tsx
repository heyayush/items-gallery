import React from 'react'
import { Box, Heading } from 'grommet'

const Navbar = (props: any) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="marineBlue"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: 1 }}
    {...props}
  >
    <Heading level="3" margin="none">
      Items Gallery
    </Heading>
  </Box>
)

export default Navbar
