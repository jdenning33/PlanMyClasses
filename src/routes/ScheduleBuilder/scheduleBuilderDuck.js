//  CONSTANTS
const CAROUSEL_TYPE = {
  COURSE : 10213,
  PRIMARY_TIME : 10214,
  SECONDARY_TIME : 10215
}

const initialState = {
  // boolean/id if id is set, our desired courses will display an add to
  // button so we can set up class or's
  setRelationship: false,

  //realtionships contains the ids of all the courses.
  // each id is in an array. If there is an or relationship between two
  //  courses, then they are in the same array
  desiredMap:
  {   relationships:  [ [  '586477d6c5d24f47c82d219b',
                           '586477cec5d24f47c82d2104'
                        ],
                        [  '586477cfc5d24f47c82d210d'
                        ]
                      ],

//active courses contains an array of each currently selected course
// this means one item from each of the relationship arrays
      activeCourseIDs: [ '586477d6c5d24f47c82d219b',
                         '586477cfc5d24f47c82d210d',
                     ],

      data:          {  '586477d6c5d24f47c82d219b':
                            { activeSection:  { id:             null,
                                                primaryTime:    null,
                                                secondaryTime:  null,
                                              },
                              removedSections: [],
                            },

                        '586477cec5d24f47c82d2104':
                            { activeSection:  { id:             null,
                                                primaryTime:    null,
                                                secondaryTime:  null,
                                              },
                              removedSections: [],
                            },

                        '586477cfc5d24f47c82d210d':
                            { activeSection:  { id:             null,
                                                primaryTime:    null,
                                                secondaryTime:  null,
                                              },
                              removedSections: [],
                            },
                    }
  },

  // Any cards that have been clicked and should be showing more info
  expandedIDs: [],
}

//  ACTIONS
const TOGGLE_DESIRED          = 'scheduleBuilder/TOGGLE_DESIRED'
const TOGGLE_DESIRED_COURSE   = 'scheduleBuilder/TOGGLE_DESIRED_COURSE'
const TOGGLE_DESIRED_SECTION  = 'scheduleBuilder/TOGGLE_DESIRED_SECTION'
const TOGGLE_ACTIVE_COURSE    = 'scheduleBuilder/TOGGLE_ACTIVE_COURSE'
const TOGGLE_ACTIVE_PRIMARY   = 'scheduleBuilder/TOGGLE_ACTIVE_PRIMARY'
const TOGGLE_ACTIVE_SECONDARY = 'scheduleBuilder/TOGGLE_ACTIVE_SECONDARY'
const CARD_CLICKED            = 'scheduleBuilder/CARD_CLICKED'


//  ACTION CREATORS
export const scheduleBuilder = {
  toggleDesired: (dataID, collection) => {
    return{
      type: TOGGLE_DESIRED,
      dataID: dataID,
      collection: collection
    }
  },

  toggleDesiredCourse: (courseID) => {
    return{
      type: TOGGLE_DESIRED_COURSE,
      courseID: courseID,
    }
  },
  toggleDesiredSection: (sectionID) => {
    return{
      type: TOGGLE_DESIRED_SECTION,
      sectionID: sectionID,
    }
  },

  toggleActiveCourse: (courseID, relationship) => {
    return{
      type: TOGGLE_ACTIVE_COURSE,
      courseID: courseID,
      relationship: relationship
    }
  },

  cardClicked: (cardID) => (
    {
      type: CARD_CLICKED,
      cardID: cardID
    }
  ),
}

//  REDUCERS
const scheduleBuilderReducer = (state = initialState, action) => {
  switch (action.type) {

    case TOGGLE_DESIRED_COURSE:
      let desiredMap = Object.assign({}, state.desiredMap);
      // The course is already in our desired map, remove it
      if( desiredMap.data[action.courseID] ){
        // Remove it from any relationships
        desiredMap.relationships =
        desiredMap.relationships
        .map((relationship) => {
          return (relationship.filter( (id) => id!==action.courseID))
        })
        .filter( (relationship) => {
          return (relationship.length != 0)
        });

        // Remove it from active courses
        desiredMap.activeCourseIDs =
        desiredMap.activeCourseIDs.filter( (id) => id!==action.courseID)

        // Remove our reference to it
        delete desiredMap.data[action.courseID];
      } else {
        //We don't have the course in our desired map, add it

        //relationships must be added later
        desiredMap.relationships.push( [ action.courseID ] );
        console.log(desiredMap.relationships)

        // Add it to our active courses, courses without relationships must be active
        desiredMap.activeCourseIDs =
        desiredMap.activeCourseIDs.concat(action.courseID);

        // Add a reference to it
        desiredMap.data[action.courseID] =
        { activeSection:  { id:             null,
                            primaryTime:    null,
                            secondaryTime:  null,
                          },
          removedSections: [],
        };
      }
      return Object.assign({}, state, {
        desiredMap:desiredMap
      });

    case TOGGLE_ACTIVE_COURSE:
      // let desiredMap = Object.assign({}, state.desiredMap);

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
