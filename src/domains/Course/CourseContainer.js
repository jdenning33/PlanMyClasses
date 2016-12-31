import { connect } from 'react-redux'
import CourseComponent from './CourseComponent'
import { dataCache } from '../../dataHandling/dataCache'
import { courseBrowser } from '../../routes/CourseBrowser/courseBrowserDuck'

const mapStateToProps = (state, ownProps) => {

  let course = state.dataCacheReducer.data.courses[ownProps.courseID];

  //decide if the card should be expanded based on the expandedIDs
  let expanded = false;
  let expandedIDs = state.courseBrowserReducer.expandedIDs;
  if(expandedIDs.length !== 0){
    expanded = expandedIDs.some((id) => ownProps.courseID===id);
  }

  return {
    course: course,
    courseID: ownProps.courseID,
    expanded: expanded,
    fetchingIDs: state.dataCacheReducer.fetchingIDs,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (dataID, collection) => {
      dispatch( dataCache.fetchIfNeeded( {type: collection,
                                          originator: 'coursesContainer',
                                          dataIDs: [dataID] }
                                        ) );
    },
    cardClicked: (dataID) => {
      dispatch( courseBrowser.cardClicked(dataID) );
    }
  }
}

const CourseContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseComponent)

export default CourseContainer
