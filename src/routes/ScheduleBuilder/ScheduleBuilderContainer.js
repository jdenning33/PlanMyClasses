import { connect } from 'react-redux'
import ScheduleBuilderComponent from './ScheduleBuilderComponent'

const mapStateToProps = (state) => {

  let courseIDs = state.scheduleBuilderReducer.desiredIDs;

  return {
    courseIDs: courseIDs,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const ScheduleBuilderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleBuilderComponent)

export default ScheduleBuilderContainer
