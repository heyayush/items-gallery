import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AnimalsContainer from '../animals/Animals'
import FruitsContainer from '../fruits/Fruits'
import '../../../styles/grid.scss'
import { Main } from 'grommet'

const Gallery = () => {
  return (
    <Main pad="small" background="milkGlass">
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
    </Main>
  )
}

export default Gallery
