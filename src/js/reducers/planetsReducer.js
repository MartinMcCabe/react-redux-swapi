import {
  FETCH_PLANET,
  DISPLAY_PLANET,
  PLANET_ERROR,
  RECEIVE_PLANET
} from '../actions/actionTypes'


const planetsReducer = (state={}, action) => {

  switch (action.type){
    case FETCH_PLANET:
      return Object.assign({}, state, {
        is_fetching: true,
        error: null
      })

    case DISPLAY_PLANET:
      return Object.assign({}, state, {
        is_displaying: action.planetId != null,
        display_id: action.planetId
      })

    case PLANET_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        is_fetching: false
      })

    case RECEIVE_PLANET:
      return Object.assign({}, state, {
        error: null,
        is_fetching: false,
        data: setPlanetData(state.data, action),
        is_displaying: action.displayId != null,
        display_id: action.displayId
      })


    default:
      return state;
  }
}

const setPlanetData = (state, action) => {
  const newPlanetData = Object.assign({}, state, {
    [action.displayId]: action.planetData
  })
  console.log(newPlanetData)
  return newPlanetData
}
export default planetsReducer;
