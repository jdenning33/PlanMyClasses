import { connect } from 'react-redux'
import ScheduleComponent from './ScheduleComponent'
import { courseBrowser } from '../../routes/CourseBrowser/courseBrowserDuck'

const mapStateToProps = (state, ownProps) => {

  let path = window.location.pathname + '/schedules';

  //decide if the card should be expanded based on the expandedIDs
  let expanded = false;
  let expandedIDs;
  expandedIDs = state.courseBrowserReducer.expandedIDs[path];
  if(expandedIDs && expandedIDs.length !== 0){
    expanded = expandedIDs.some((id) => ownProps.scheduleID===id);
  }

  let courses = state.dataCacheReducer.data.courses;
  let sections = state.dataCacheReducer.data.sections;

  return {
    ready: (ownProps.scheduleJSON)?true:false,
    courses: courses,
    sections: sections,
    scheduleJSON: ownProps.scheduleJSON,
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
