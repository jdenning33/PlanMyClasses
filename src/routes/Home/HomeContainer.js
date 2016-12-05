import { connect } from 'react-redux'
import HomeComponent from './HomeComponent'
import { setRoute, ROUTE_ENUM } from '../routesDuck'

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    scheduleBuilderClick: () => {
      dispatch(setRoute(ROUTE_ENUM.SCHEDULE_BUILDER))
    },
    courseBrowserClick: () => {
      dispatch(setRoute(ROUTE_ENUM.COURSE_BROWSER))
    }
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)

export default HomeContainer
