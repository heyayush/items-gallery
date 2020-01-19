import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AnimalsContainer from '../animals/Animals'
import FruitsContainer from '../fruits/Fruits'
import '../../../styles/grid.scss'

const Gallery = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/animals"></Redirect>
      </Route>
      <Route path="/animals">
        <AnimalsContainer />
      </Route>
      <Route path="/fruits">
        <FruitsContainer />
      </Route>
    </Switch>
  )
}

export default Gallery
