import React, { useState, useEffect } from 'react'
import { getAnimalsList } from '../../services/animals'
import Card from '../../components/card/Card'
import { Grid } from 'grommet'
import { AnimalI } from '../../types'

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

const AnimalsContainer = () => {
  const [animalsData, setAnimalsData] = useState()
  useEffect(() => {
    getAnimalsList().then(data => setAnimalsData(data))
  }, [])

  return (
    <Grid className="grid-container">
      {animalsData && animalsData.map((animal: AnimalI) => <Card data={animal} key={animal.Id} />)}
    </Grid>
  )
}

export default AnimalsContainer
