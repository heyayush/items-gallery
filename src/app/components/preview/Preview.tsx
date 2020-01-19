import React, { useState } from 'react'
import { Box, Image, Heading, Paragraph } from 'grommet'
import Loader from '../loader/Loader'

const Preview = ({ data }: any) => {
  const [loading, setLoading] = useState(true)
  return (
    <Box animation="zoomIn" direction="row">
      <Box>
        {loading && <Loader />}
        <Image
          fit="cover"
          src={data.ImageURLs.FullSize}
          a11yTitle={data.Title}
          onLoad={() => setLoading(false)}
        ></Image>
      </Box>
      <Box pad="small" background="milkGlass">
        <Box>
          <Heading level={1} margin={{ vertical: 'small' }} color="marineBlue">
            {data.Title}
          </Heading>
        </Box>
        <Box>
          <Heading level={4} margin={{ vertical: 'xsmall' }} color="brightCerulean">
            <strong>Family: </strong>
            {data.Family}
          </Heading>
        </Box>
        {data.CollectiveNoun && (
          <Box>
            <Heading level={4} margin={{ vertical: 'xsmall' }} color="brightCerulean">
              <strong>Collective Noun: </strong>
              {data.CollectiveNoun}
            </Heading>
          </Box>
        )}
        {data.Genus && (
          <Box>
            <Heading level={4} margin={{ vertical: 'xsmall' }} color="brightCerulean">
              <strong>Genus: </strong>
              {data.Genus}
            </Heading>
          </Box>
        )}
        <Box>
          <Paragraph color="brightCerulean">{data.Description}</Paragraph>
        </Box>
      </Box>
    </Box>
  )
}

export default Preview
