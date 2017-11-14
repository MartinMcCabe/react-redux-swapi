import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import rootReducer from './reducers/rootReducer'

const defaultState = {
  people: {
    data: null,
    is_fetching: false,
    error: null,
    display_settings: {
      cols:[
        {
          name: 'Name',
          field: 'name',
          active: true
        },
        {
          name: 'Height',
          field: 'height',
          active: true
        },
        {
          name: 'Mass',
          field: 'mass',
          active: true
        },
        {
          name: 'Created',
          field: 'created',
          active: true
        },
        {
          name: 'Edited',
          field: 'edited',
          active: true
        },
        {
          name: 'Home World',
          field: 'homeworld',
          active: true
        }
      ],
      sort:{
        field: 'name',
        ascending: true
      }
    }
  },
  planets:{
    is_fetching: false,
    error: null,
    is_displaying: false,
    display_id: null,
    data: {}
  }
}

export const history = createHistory()
const router_middleware = routerMiddleware(history)
const middleWare = [thunk, router_middleware]

export const store = createStore( rootReducer, defaultState, applyMiddleware(...middleWare) )
