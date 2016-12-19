import { connect } from 'react-redux'
import HomeComponent from './HomeComponent'
import { setRoute } from '../routesDuck'

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeRoute: (route) => {
      dispatch(setRoute(route));
    }
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)

export default HomeContainer
