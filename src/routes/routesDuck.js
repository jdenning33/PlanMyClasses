//  CONSTANTS
export const ROUTE_ENUM = {
  HOME: 'PlanMyClasses/HOME',
  SCHEDULE_BUILDER: 'PlanMyClasses/SCHEDULE_BUILDER',
  COURSE_BROWSER: 'PlanMyClasses/COURSE_BROWSER'
}

//  ACTIONS

//  ACTION CREATORS
export const setRoute = (filter) => {
  return {
    type: 'SET_ROUTE',
    filter
  }
}

//  REDUCERS
const routesReducer = (state = ROUTE_ENUM.HOME, action) => {
  switch (action.type) {
    case 'SET_ROUTE':
      return action.filter
    default:
      return state
  }
}

export default routesReducer
