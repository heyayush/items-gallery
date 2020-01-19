import React, { useState } from 'react'
import { Box, Image, Heading, Layer, Paragraph } from 'grommet'
import './card.scss'
import Preview from '../preview/Preview'

const Card = ({ data }: any) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Box
        className="card-container"
        background="light-1"
        elevation="medium"
        pad="small"
        round
        animation="fadeIn"
        onClick={() => setShow(true)}
      >
        <Box className="card-head" direction="row-responsive">
          <Box className="thumb" height="xsmall" width="xsmall">
            <Image fit="cover" src={data.ImageURLs.Thumb} alt={data.Title}></Image>
          </Box>
          <Box className="title" margin={{ left: 'small' }}>
            <Heading level={3}>{data.Title}</Heading>
          </Box>
        </Box>
        <Box className="card-body">
          <Box className="card-description">
            <Paragraph>{data.Description}</Paragraph>
          </Box>
        </Box>
      </Box>
      {show && (
        <Layer onEsc={() => setShow(false)} onClickOutside={() => setShow(false)}>
          <Preview data={data}></Preview>
        </Layer>
      )}
    </>
  )
}

export default Card
