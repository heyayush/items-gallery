import React from 'react'
import { Box, Image, Heading, Paragraph } from 'grommet'

const Preview = ({ data }: any) => {
  return (
    <Box className="preview-container" animation="zoomIn" direction="row">
      <Box className="full-size-image">
        <Image fit="cover" src={data.ImageURLs.FullSize} alt={data.Title}></Image>
      </Box>
      <Box className="details" pad="small">
        <Box>
          <Heading level={2} margin={{ vertical: 'small' }}>
            {data.Title}
          </Heading>
        </Box>
        <Box>
          <Heading level={4} margin={{ vertical: 'xsmall' }}>
            Family: {data.Family}
          </Heading>
        </Box>
        {data.CollectiveNoun && (
          <Box>
            <Heading level={4} margin={{ vertical: 'xsmall' }}>
              Collective Noun: {data.CollectiveNoun}
            </Heading>
          </Box>
        )}
        {data.Genus && (
          <Box>
            <Heading level={4} margin={{ vertical: 'xsmall' }}>
              Genus: {data.Genus}
            </Heading>
          </Box>
        )}
        <Box className="card-description">
          <Paragraph>{data.Description}</Paragraph>
        </Box>
      </Box>
    </Box>
  )
}

export default Preview
