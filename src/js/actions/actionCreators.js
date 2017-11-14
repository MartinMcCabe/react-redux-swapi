import {
  FETCH_PEOPLE,
  RECEIVE_PEOPLE,
  PEOPLE_ERROR,
  SORT_PEOPLE,
  TOGGLE_ORDER,
  DISPLAY_PLANET,
  FETCH_PLANET,
  PLANET_ERROR,
  RECEIVE_PLANET
} from './actionTypes'
import fetch from 'isomorphic-fetch'

const peopleError = (error) => {
  return {
    type: PEOPLE_ERROR,
    error
  }
}

const fetchPeople = () => {
  return {
    type: FETCH_PEOPLE
  }
}

const receivePeople = (peopledata) => {
  return {
    type: RECEIVE_PEOPLE,
    peopledata
  }
}

export const sortPeople = (field) => {
  return {
    type: SORT_PEOPLE,
    field
  }
}

export const toggleOrder = () => {
  return {
    type: TOGGLE_ORDER
  }
}

export const getPeopleIfNeeded = () => {
  return (dispatch, getState) => {
    const { people } = getState()
    if(!people.data){
      dispatch(fetchPeople())
      fetchSwapiPeople(dispatch).then(data => {
        if(data){
          dispatch(receivePeople(data))
        }
      })
    }
  }
}

const fetchSwapiPeople = (dispatch, url = `https://swapi.co/api/people/`) => {
  return fetch(url)
    .then(
      // success
      (response) => {
        if (response.status >= 400){
          if(dispatch){
            dispatch(peopleError(`There was a problem fetching swapi people, please try again later`))
          }
          var err = new Error(response.statusText)
          err.response = response
          throw err
        }
        return response.json()
      },
      // fail
      (error) => {
        if(dispatch){
          dispatch(peopleError(`There was an error while trying fetch people, please try again later.`))
        }
        var err = new Error(error.message)
        throw err
      }
    )
    .then( data => {
      return data
    })
    .catch(e => {
      console.error(e)
    })
}

// planets

export const displayPlanetInfo = (planetId) => {
  return {
    type: DISPLAY_PLANET,
    planetId
  }
}

const fetchNewPlanetInfo = () => {
  return {
    type: FETCH_PLANET
  }
}

const planetError = (error) => {
  return {
    type: PLANET_ERROR,
    error
  }
}

const receivePlanet = (planetData, displayId=null) => {
  return {
    type: RECEIVE_PLANET,
    planetData,
    displayId
  }
}

export const fetchPlanetInfo = (planetId) => {
  return (dispatch, getState) => {
    const { data } = getState().planets
    if(data[planetId]){
      dispatch(displayPlanetInfo(planetId))
    }else{

      dispatch(fetchNewPlanetInfo())
      const url = `https://swapi.co/api/planets/${planetId}/`
      return fetch(url)
        .then(
          response => {
            if( response.status >= 400 ) {
              dispatch(planetError(`There was a problem fetching the planet info, please try again later`))
              var err = new Error(response.statusText)
              err.response = response
              throw err
            }
            return response.json()
          },
          error => {
            dispatch(planetError(`There was a problem fetching the planet info, please try again later`))
            var err = new Error(error.message)
            throw err
          }
         )
         .then( json => {
            dispatch(receivePlanet(json, planetId))
         } )
         .catch( e => {
           console.error(e)
         })
    }
  }
}
