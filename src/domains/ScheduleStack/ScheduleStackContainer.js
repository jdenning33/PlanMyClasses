import { connect } from 'react-redux'
import ScheduleStackComponent from './ScheduleStackComponent'
import { dataCache } from '../../dataHandling/dataCache'



const mapStateToProps = (state, ownProps) => {

  let stackMap = ownProps.stackMap;
  let courseIDs = Object.keys(stackMap.data);


  // let courseIDs = ownProps.courseIDs;
  let courses = state.dataCacheReducer.data.courses;

  let ready;
  dataCache.isDataLoaded(courses, courseIDs) ?
    ready=true: ready=false;



  return {
    ready: ready,
    courses: courses,
    courseIDs: courseIDs,
    stackMap: stackMap,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (dataIDs, collection) => {
      let promise;
      promise = dispatch( dataCache.fetchIfNeeded( {type: collection,
                                          originator: 'scheduleStackContainer',
                                          dataIDs: dataIDs }
                                        ));
      return promise;
    },
  }
}

const ScheduleStackContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleStackComponent)

export default ScheduleStackContainer
