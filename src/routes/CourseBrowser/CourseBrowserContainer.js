import { connect } from 'react-redux'
import CourseBrowserComponent from './CourseBrowserComponent'
import { dataCache } from '../../dataHandling/dataCache'
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
    subjects: mySubjects,         //The subject data that has been loaded
    subjectIDs: subjectIDs,       //The data we need to display regardless of wheter or not its loaded
    fetchingIDs: state.dataCacheReducer.fetchingIDs,  //data we are fetching
    expandedIDs: state.courseBrowserReducer.expandedIDs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (dataIDs, collection) => {
      dispatch( dataCache.fetchIfNeeded( {type: collection,
                                          originator: 'courseBrowser',
                                          dataIDs: dataIDs }
                                        ) );
    },
    cardClicked: (dataID) => {
      dispatch( courseBrowser.cardClicked(dataID) );
    }
  }
}

const CourseBrowserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseBrowserComponent)

export default CourseBrowserContainer
