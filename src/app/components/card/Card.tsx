import React from 'react'
import { Box, Image, Heading, Paragraph } from 'grommet'

const ani = {
  Id: 1,
  Title: 'Baby Antelope',
  Description:
    'An antelope is a member of a number of even-toed ungulate species indigenous to various regions in Africa and Eurasia. A group of antelope is called a herd.',
  Family: 'Bovidae',
  CollectiveNoun: 'Herd',
  Width: 800,
  Height: 600,
  ImageURLs: {
    FullSize: 'http://styleguide.effectivedigital.com/interview/images/animals/1_full.jpg',
    Thumb: 'http://styleguide.effectivedigital.com/interview/images/animals/1_thumb.jpg',
  },
}

const Card = ({ data }: any) => {
  return (
    <Box className="card-container" background="light-1" elevation="medium" pad="small" round animation="fadeIn">
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
  )
}

export default Card
