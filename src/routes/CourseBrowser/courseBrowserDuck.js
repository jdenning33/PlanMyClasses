
//  CONSTANTS
const initialState = {
  expandedIDs: {},
  subjectIDs : ['586477cbc5d24f47c82d20f9',
                '586477cbc5d24f47c82d20fa',
                '586477cbc5d24f47c82d20fb']
}

//  ACTIONS
const CARD_CLICKED = 'courseBrowser/CARD_CLICKED';

//  ACTION CREATORS
export const courseBrowser = {

  cardClicked: (cardID) => (
    {
      type: CARD_CLICKED,
      cardID: cardID
    }
  )
}

//  REDUCERS
const courseBrowserReducer = (state = initialState, action) => {
  switch (action.type) {

    case CARD_CLICKED:
      let path = window.location.pathname;
      //remove the subject from expanded cards
      let newExpandedIDs = state.expandedIDs;
      if( !newExpandedIDs[path] ) newExpandedIDs[path] = [];
      let preLength = newExpandedIDs[path].length;
      console.log(newExpandedIDs[path]);
      if( newExpandedIDs[path].length !== 0 ){
        newExpandedIDs[path] =
            newExpandedIDs[path].filter((id) => action.cardID !== id);
      }
      console.log(newExpandedIDs[path])

      //if it wasn't in expanded cards, add it to expanded cards
      if( newExpandedIDs[path] && newExpandedIDs[path].length === preLength ){
        newExpandedIDs[path].push(action.cardID);
      };
      console.log(newExpandedIDs[path])

      return Object.assign({},state,{
        expandedIDs: newExpandedIDs
      });
    default:
      return state
  }
}

export default courseBrowserReducer
