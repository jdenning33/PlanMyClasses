//  CONSTANTS
const initialState = {
  desiredIDs: [ { id:'0001234' }, { id: '0000355' } ]
}

//  ACTIONS
const ADD_COURSE_ID = 'desiredCourse/ADD_COURSE'

//  ACTION CREATORS
export const addCourseID = (filter) => {
  return {
    type: ADD_COURSE_ID,
    filter
  }
}

//  REDUCERS
const desiredCoursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COURSE_ID:
      return Object.assign({},state,{
        desiredCourses: Object.assign({}, state.desiredCourses, action.filter)
      })
    default:
      return state
  }
}

export default desiredCoursesReducer
