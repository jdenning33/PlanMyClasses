import { addCourseID } from '../../domains/DesiredCourses/desiredCoursesDuck'

//  CONSTANTS
const initialState = {
  rootCard: 'ROOT',
  expandedCards: {  { ECE, {101, {003}, {004}}, {131} },
                    { MATH },
                    { PENP } }
}

//  ACTIONS
const CARD_CLICKED = 'courseBrowser/CARD_CLICKED'

//  ACTION CREATORS
export const addCourse = (filter) => {
  return {
    addCourseID(filter);
  }
}

export const cardClicked = (cardID) => {
  return {
    type: CARD_CLICKED,
    cardID
  }
}

//  REDUCERS
const courseBrowserReducer = (state = initialState, action) => {
  switch (cardClicked) {
    case CARD_CLICKED:
      return Object.assign({},state,{
        rootCard: cardID
      })
    default:
      return state
  }
}

export default desiredCoursesReducer
