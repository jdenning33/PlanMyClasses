//  CONSTANTS
const initialState = {
  // desiredIDs: { },
  desiredIDs: { '586477cdc5d24f47c82d20fc': {type:'courses'},
                '586477cec5d24f47c82d2104': {type:'courses'},
                '586477cfc5d24f47c82d210d': {type:'courses'} },
  expandedIDs: []
}

//  ACTIONS
const TOGGLE_DESIRED = 'scheduleBuilder/TOGGLE_DESIRED'
const CARD_CLICKED = 'scheduleBuilder/CARD_CLICKED';


//  ACTION CREATORS
export const scheduleBuilder = {
  toggleDesired: (dataID, collection) => {
    return{
      type: TOGGLE_DESIRED,
      dataID: dataID,
      collection: collection
    }
  },

  cardClicked: (cardID) => (
    {
      type: CARD_CLICKED,
      cardID: cardID
    }
  )
}

//  REDUCERS
const scheduleBuilderReducer = (state = initialState, action) => {
  switch (action.type) {

    case TOGGLE_DESIRED:
      let newDesired = Object.assign({}, state.desiredIDs);
      if(!state.desiredIDs[action.dataID]){
        newDesired[action.dataID] = {type:action.collection.name};
      }else{
        delete newDesired[action.dataID];
      }
      return Object.assign({},state,{
        desiredIDs: newDesired
      });

    case CARD_CLICKED:
      //remove the subject from expanded cards
      let newExpandedIDs = [];
      if( state.expandedIDs.length !== 0 ){
        newExpandedIDs =
            state.expandedIDs.filter((id) => action.cardID !== id);
      }
      //if it wasn't in expanded cards, add it to expanded cards
      if( newExpandedIDs.length === state.expandedIDs.length ){
        newExpandedIDs.push(action.cardID);
      };

      return Object.assign({},state,{
        expandedIDs: newExpandedIDs
      });

    default:
      return state
  }
}

export default scheduleBuilderReducer
