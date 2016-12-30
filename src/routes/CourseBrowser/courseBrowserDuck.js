import { addCourseID } from '../../domains/DesiredCourses/desiredCoursesDuck'
import dataAPI, { COLLECTIONS_ENUM } from '../../apis/dataAPI'

//  CONSTANTS
const initialState = {
  rootCard: 'ROOT',
  isFetching: false,
  expandedCards: {  { ECE, {101, {003}, {004}}, {131} },
                    { MATH },
                    { PENP } },
  subjects: []
}

//  ACTIONS
const CARD_CLICKED = 'courseBrowser/CARD_CLICKED';
const FETCH_SUBJECTS_REQUEST = 'courseBrowser/FETCHING_SUBJECTS';
const FETCH_SUBJECTS_SUCCESS = 'courseBrowser/FETCHING_SUBJECTS';
const FETCH_SUBJECTS_FAILURE = 'courseBrowser/FETCHING_SUBJECTS';

//  ACTION CREATORS
export const fetchSubjects = (campus) => {
  return (dispatch) => {
    dispatch( {type:FETCH_SUBJECTS_REQUEST} );
    dataAPI.get( {type:COLLECTIONS_ENUM.SUBJECTS} )
    .then( (data) => dispatch( {type: FETCH_SUBJECTS_SUCCESS, data: data}) )
    .catch( (err) => dispatch( {type: FETCH_SUBJECTS_FAILURE, err : err }) );
  }
}

export const addCourse = (filter) => {
  return {
    addCourseID(filter);
  }
}

export const cardClicked = (cardID) => {
  return {
    type: CARD_CLICKED,
    cardID: cardID
  }
}

//  REDUCERS
const courseBrowserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARD_CLICKED:
      return Object.assign({},state,{
        rootCard: action.cardID
      });
    case FETCH_SUBJECTS_REQUEST:
      return Object.assign({},state,{
        isFetching:true
      });
    case FETCH_SUBJECTS_SUCCESS:
      return Object.assign({},state,{
        isFetching:false,
        subjects: action.data
      });
    case FETCH_SUBJECTS_REQUEST:
      return Object.assign({},state,{
        isFetching:false,
        console.log(action.err)
      });
    default:
      return state
  }
}

export default desiredCoursesReducer
