import {
  FETCH_PEOPLE,
  RECEIVE_PEOPLE,
  PEOPLE_ERROR,
  SORT_PEOPLE,
  TOGGLE_ORDER
} from '../actions/actionTypes'


const peopleReducer = (state=[], action) => {

  switch (action.type){
    case FETCH_PEOPLE:
      return Object.assign({}, state, {
        is_fetching: true,
        error: null
      })

    case RECEIVE_PEOPLE:
      return Object.assign({}, state, {
        data: action.peopledata,
        is_fetching: false,
        error: null
      })

    case PEOPLE_ERROR:
      return Object.assign({}, state, {
        is_fetching: false,
        error: action.error
      })

    case SORT_PEOPLE:
      const newDisplaySettings = Object.assign({}, state.display_settings, {
        sort: setSort(state.display_settings.sort, action)
      })

      return Object.assign({}, state, {
        display_settings: newDisplaySettings,
        data: reorderPeople(state.data, action.field, newDisplaySettings.sort.ascending)
      })

    case TOGGLE_ORDER:
      const toggleOrderDisplaySettings = Object.assign({}, state.display_settings, {
        sort: setOrder(state.display_settings.sort, action)
      })

      return Object.assign({}, state, {
        display_settings: toggleOrderDisplaySettings,
        data: reorderPeople(state.data, state.display_settings.sort.field, toggleOrderDisplaySettings.sort.ascending)
      })

    default:
      return state;
  }
}

const setSort = (sort={}, action) => {
  return Object.assign({}, sort, {
      field: action.field,
      ascending: true
    })
}

const setOrder = (sort={}, action) => {
  return Object.assign({}, sort, {
    ascending: !sort.ascending
  })
}

const reorderPeople = (data={}, field, ascending) => {
  const results =  [...data.results].sort((a, b) => {
    let _a = a[field]
    let _b = b[field]
    let compare = 0;

    if(field == 'height' || field == 'mass'){
      _a = Number(a[field])
      _b = Number(b[field])
    }else if(field == 'created' || field == 'edited'){
      _a = new Date(a[field])
      _b = new Date(b[field])
    }

    if (_a > _b) {
      compare = 1;
    } else if (_a < _b) {
      compare = -1;
    }
    return ascending ? compare : compare * -1;
  })

  return Object.assign({}, data, {
    results: results
  })
}

export default peopleReducer;
