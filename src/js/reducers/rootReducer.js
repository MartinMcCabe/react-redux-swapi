import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import peopleReducer from './peopleReducer';
import planetsReducer from './planetsReducer';

const rootReducer = combineReducers({people:peopleReducer, planets:planetsReducer, router: routerReducer});

export default rootReducer;
