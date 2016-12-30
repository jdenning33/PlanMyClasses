
//  CONSTANTS
const initialState = {
  expandedIDs: [],
  subjectIDs : ['586477cbc5d24f47c82d20f9',
                '586477cbc5d24f47c82d20fa',
                '586477cbc5d24f47c82d20fb']
}

//  ACTIONS
const SUBJECT_CLICKED = 'courseBrowser/SUBJECT_CLICKED';

//  ACTION CREATORS
export const courseBrowser = {

  subjectClicked: (subjectID) => (
    {
      type: SUBJECT_CLICKED,
      subjectID: subjectID
    }
  )
}

//  REDUCERS
const courseBrowserReducer = (state = initialState, action) => {
  switch (action.type) {

    case SUBJECT_CLICKED:
      //remove the subject from expanded cards
      let newExpandedIDs = [];
      if( state.expandedIDs.length !== 0 ){
        newExpandedIDs =
            state.expandedIDs.filter((id) => action.subjectID !== id);
      }
      //if it wasn't in expanded cards, add it to expanded cards
      if( newExpandedIDs.length === state.expandedIDs.length ){
        newExpandedIDs.push(action.subjectID);
      };

      return Object.assign({},state,{
        expandedIDs: newExpandedIDs
      });
    default:
      return state
  }
}

export default courseBrowserReducer
