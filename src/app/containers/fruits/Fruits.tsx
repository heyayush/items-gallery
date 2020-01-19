import React, { useState, useEffect } from 'react'
import { getFruitsList } from '../../services/fruits'
import { Grid } from 'grommet'
import Card from '../../components/card/Card'

const FruitsContainer = () => {
  const [fruitsData, setFruitsData] = useState()
  useEffect(() => {
    getFruitsList().then(data => setFruitsData(data))
  }, [])

  return (
    <Grid className="grid-container">
      {fruitsData && fruitsData.map((fruit: any) => <Card data={fruit} key={fruitsData.id} />)}
    </Grid>
  )
}

export default FruitsContainer
