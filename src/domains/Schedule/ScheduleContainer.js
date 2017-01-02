import { connect } from 'react-redux'
import ScheduleComponent from './ScheduleComponent'
import { courseBrowser } from '../../routes/CourseBrowser/courseBrowserDuck'

const mapStateToProps = (state, ownProps) => {

  let path = window.location.pathname + '/schedules';

  console.log('here I am');

  //decide if the card should be expanded based on the expandedIDs
  let expanded = false;
  let expandedIDs;
  expandedIDs = state.courseBrowserReducer.expandedIDs[path];
  if(expandedIDs && expandedIDs.length !== 0){
    expanded = expandedIDs.some((id) => ownProps.scheduleID===id);
  }

  return {
    schedule: ownProps.schedule,
    expanded: expanded,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cardClicked: (dataID) => {
      dispatch( courseBrowser.cardClicked(dataID) );
    },
  }
}

const ScheduleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleComponent)

export default ScheduleContainer
