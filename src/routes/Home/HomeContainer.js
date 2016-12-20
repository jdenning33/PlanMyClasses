import { connect } from 'react-redux'
import HomeComponent from './HomeComponent'
import { setRoute } from '../AppRouter'

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeRoute: (route) => {
      setRoute(route);
    }
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)

export default HomeContainer
