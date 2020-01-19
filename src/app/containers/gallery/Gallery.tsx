import React, { Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import '../../../styles/grid.scss'
import { Main } from 'grommet'
import Loader from '../../components/loader/Loader'

const AnimalsContainer = lazy(() => import('../animals/Animals'))
const FruitsContainer = lazy(() => import('../fruits/Fruits'))

const Gallery = () => {
  return (
    <Main pad="small" background="milkGlass">
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </Main>
  )
}

export default Gallery
