import { connect } from 'react-redux'
import CourseBrowserComponent from './CourseBrowserComponent'
import { dataCache, COLLECTIONS_ENUM } from '../../dataHandling/dataCache'
import { courseBrowser } from './courseBrowserDuck'

const mapStateToProps = (state, ownProps) => {

  let subjectIDs = state.courseBrowserReducer.subjectIDs;

  let subjects = state.dataCacheReducer.data.subjects;

  let mySubjects = {};
  subjectIDs.forEach( (id) => {
    if(subjects[id]){
      mySubjects[id] = subjects[id];
    }
  });

  return {
    subjects: mySubjects,
    subjectIDs: subjectIDs,
    fetchingIDs: state.dataCacheReducer.fetchingIDs,
    expandedIDs: state.courseBrowserReducer.expandedIDs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSubjects: (subjectIDs) => {
      dispatch( dataCache.fetchIfNeeded( {type:COLLECTIONS_ENUM.SUBJECTS,
                                          originator: 'courseBrowser',
                                          dataIDs: subjectIDs }
                                        ) );
    },
    subjectClicked: (subjectID) => {
      dispatch( courseBrowser.subjectClicked(subjectID) );
    }
  }
}

const CourseBrowserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseBrowserComponent)

export default CourseBrowserContainer
