//  CONSTANTS
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

      data:          {  '586477d6c5d24f47c82d219b':   //course
                            { activeSectionID:  null,
                              removedSections: [],
                            },

                        '586477cec5d24f47c82d2104':
                            { activeSectionID:  null,
                              removedSections: [],
                            },

                        '586477cfc5d24f47c82d210d':
                            { activeSectionID:  null,
                              removedSections: [],
                            },
                    }
  },

  // Any cards that have been clicked and should be showing more info
  expandedIDs: [],
}

//  ACTIONS
const TOGGLE_DESIRED_COURSE   = 'scheduleBuilder/TOGGLE_DESIRED_COURSE'
const TOGGLE_DESIRED_SECTION  = 'scheduleBuilder/TOGGLE_DESIRED_SECTION'
const SWITCH_ACTIVE_COURSE    = 'scheduleBuilder/SWITCH_ACTIVE_COURSE'
const SWITCH_ACTIVE_SECTION   = 'scheduleBuilder/SWITCH_ACTIVE_SECTION'
const CARD_CLICKED            = 'scheduleBuilder/CARD_CLICKED'


//  ACTION CREATORS
export const scheduleBuilder = {
  toggleDesiredCourse: (course) => {
    return{
      type: TOGGLE_DESIRED_COURSE,
      course: course,
    }
  },
  toggleDesiredSection: (section) => {
    return{
      type: TOGGLE_DESIRED_SECTION,
      section: section,
    }
  },

  switchActiveCourse: (removeID, addID) => {
    return{
      type: SWITCH_ACTIVE_COURSE,
      addID,
      removeID
    }
  },
  switchActiveSection: (courseID, sectionID) => {
    return{
      type: SWITCH_ACTIVE_SECTION,
      courseID,
      sectionID
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
      let courseID = action.course._id;

      if( desiredMap.data[courseID] ){
        // The course is already in our desired map, remove it
        // Remove it from any relationships
        desiredMap.relationships =
        desiredMap.relationships
        .map((relationship) => {
          return (relationship.filter( (id) => id!==courseID))
        })
        // Remove any null relationships
        .filter( (relationship) => {
          return (relationship.length !== 0)
        });

        // Remove it from active courses
        desiredMap.activeCourseIDs =
        desiredMap.activeCourseIDs.filter( (id) => id!==courseID)

        // Remove our reference to it
        delete desiredMap.data[courseID];
      } else {
        //We don't have the course in our desired map, add it

        //relationships will be added later
        desiredMap.relationships.push( [ courseID ] );

        // Add it to our active courses, courses without relationships
        // must be active
        desiredMap.activeCourseIDs =
        desiredMap.activeCourseIDs.concat(courseID);

        // Add a reference to it
        desiredMap.data[courseID] =
        { activeSectionID: action.course.sectionIDs[0],
          removedSections: [],
        };
      }
      return Object.assign({}, state, {
        desiredMap:desiredMap
      });

    case SWITCH_ACTIVE_COURSE:
      desiredMap = Object.assign({}, state.desiredMap);
      // remove the old active course
      desiredMap.activeCourseIDs = desiredMap.activeCourseIDs
      .filter( (id) => id !== action.removeID);

      // add the new active course
      desiredMap.activeCourseIDs.push(action.addID);
      return Object.assign({}, state, {
        desiredMap:desiredMap
      });

    case SWITCH_ACTIVE_SECTION:
      desiredMap = Object.assign({}, state.desiredMap);
      // set the active course
      desiredMap.data[action.courseID].activeSectionID =
        action.sectionID;

      return Object.assign({}, state, {
        desiredMap:desiredMap
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
      return state;
  }
}

export default scheduleBuilderReducer
