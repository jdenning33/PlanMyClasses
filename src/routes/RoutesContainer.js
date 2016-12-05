import { connect } from 'react-redux'
import RoutesComponent from './RoutesComponent'

const mapStateToProps = (state) => {
  return {
    routesReducer: state.routesReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const RoutesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoutesComponent)

export default RoutesContainer
