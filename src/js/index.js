import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Route, Switch, Router } from 'react-router'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import { store, history } from './store'
import Main from './containers/main'
import PeoplePage from './containers/peoplePage'
import NotFoundPage from './containers/notFoundPage'

render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <Main>
        <Switch>
          <Route exact path='/' component={ PeoplePage } />
          <Route component={ NotFoundPage } />
        </Switch>
      </Main>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('swapi-app')
)
