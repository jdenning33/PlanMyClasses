//  ACTIONS

//  ACTION CREATORS

//  REDUCERS
import { combineReducers } from 'redux'
import routesReducer from './routes/routesDuck'
import schedPrefReducer from './domains/SchedulePreferences/schedPrefDuck'
import desiredCoursesReducer from './domains/DesiredCourses/desiredCoursesDuck'

const rootReducer = combineReducers({
  routesReducer,
  schedPrefReducer,
  desiredCoursesReducer
})

export default rootReducer
