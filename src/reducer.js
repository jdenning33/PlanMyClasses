//  ACTIONS

//  ACTION CREATORS

//  REDUCERS
import { combineReducers } from 'redux'
import schedPrefReducer from './domains/SchedulePreferences/schedPrefDuck'
import desiredCoursesReducer from './domains/DesiredCourses/desiredCoursesDuck'
import courseBrowserReducer from './routes/CourseBrowser/courseBrowserDuck'
import dataCacheReducer from './dataHandling/dataCache'

const reducer = combineReducers({
  schedPrefReducer,
  desiredCoursesReducer,
  courseBrowserReducer,
  dataCacheReducer
})

export default reducer
