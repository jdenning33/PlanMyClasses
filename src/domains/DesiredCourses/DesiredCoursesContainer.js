import { connect } from 'react-redux'
import DesiredCoursesComponent from './DesiredCoursesComponent'
import { setRoute, ROUTE_ENUM } from '../../routes/routesDuck'

const mapStateToProps = (state, ownProps) => {
  console.log(state.desiredCoursesReducer.desiredIDs);
  return {
    currentCourses: state.desiredCoursesReducer.desiredIDs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCourseButtonAction: () => {
      dispatch(setRoute(ROUTE_ENUM.COURSE_BROWSER))
    }
  }
}

const DesiredCoursesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DesiredCoursesComponent)

export default DesiredCoursesContainer
