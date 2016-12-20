//  ACTIONS

//  ACTION CREATORS

//  REDUCERS
import { combineReducers } from 'redux'
import schedPrefReducer from './domains/SchedulePreferences/schedPrefDuck'
import desiredCoursesReducer from './domains/DesiredCourses/desiredCoursesDuck'

const rootReducer = combineReducers({
  schedPrefReducer,
  desiredCoursesReducer
})

export default rootReducer
