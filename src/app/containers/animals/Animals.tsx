import React, { useState, useEffect } from 'react'
import { getAnimalsList } from '../../services/animals'
import Card from '../../components/card/Card'
import { Grid } from 'grommet'
import { AnimalI } from '../../types'

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
