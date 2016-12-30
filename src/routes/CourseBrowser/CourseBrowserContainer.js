import { connect } from 'react-redux'
import CourseBrowserComponent from './CourseBrowserComponent'
import { dataCache, COLLECTIONS_ENUM } from '../../dataHandling/dataCache'

const mapStateToProps = (state, ownProps) => {

  let subjectIDs = ['586477cbc5d24f47c82d20f9',
                    '586477cbc5d24f47c82d20fa',
                    '586477cbc5d24f47c82d20fb']

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
    fetchingIDs: state.dataCacheReducer.fetchingIDs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSubjects: (subjectIDs) => {
      dispatch( dataCache.fetchIfNeeded( {type:COLLECTIONS_ENUM.SUBJECTS,
                                          originator: 'courseBrowser',
                                          dataIDs: subjectIDs }
                                        ) );
    }
  }
}

const CourseBrowserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseBrowserComponent)

export default CourseBrowserContainer
