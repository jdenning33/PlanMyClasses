import { connect } from 'react-redux'
import ScheduleBuilderComponent from './ScheduleBuilderComponent'
import { scheduleBuilder } from './scheduleBuilderDuck'
import { COLLECTIONS_ENUM } from '../../dataHandling/dataCache'


const mapStateToProps = (state) => {

  // let courseIDs = state.scheduleBuilderReducer.desiredIDs;
  let stackMap = state.scheduleBuilderReducer.desiredMap;
  let courseIDs = Object.keys(stackMap.data);
  console.log(stackMap);

  return {
    courseIDs: courseIDs,
    stackMap: stackMap,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleActiveData: (dataID, dataType) => {
      switch (dataType) {
        case COLLECTIONS_ENUM.course:

          break;
        default:

      }
    }
  }
}

const ScheduleBuilderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleBuilderComponent)

export default ScheduleBuilderContainer
