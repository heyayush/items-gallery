import React, { useState, useEffect } from 'react'
import { getFruitsList } from '../../services/fruits'
import { Grid } from 'grommet'
import Card from '../../components/card/Card'
import { FruitI } from '../../types'

const FruitsContainer = () => {
  const [fruitsData, setFruitsData] = useState()
  useEffect(() => {
    getFruitsList().then(data => setFruitsData(data))
  }, [])

  return (
    <Grid className="grid-container">
      {fruitsData && fruitsData.map((fruit: FruitI) => <Card data={fruit} key={fruit.Id} />)}
    </Grid>
  )
}

export default FruitsContainer
