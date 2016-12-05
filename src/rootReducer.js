//  ACTIONS

//  ACTION CREATORS

//  REDUCERS
import { combineReducers } from 'redux'
import routesReducer from './routes/routesDuck'
import schedPrefReducer from './domains/SchedulePreferences/schedPrefDuck'

const rootReducer = combineReducers({
  routesReducer,
  schedPrefReducer
})

export default rootReducer
