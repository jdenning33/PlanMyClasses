import { connect }      from 'react-redux'
import BottomNavigationComponent  from './BottomNavigationComponent'
import { setRoute }     from '../../routes/AppRouter'
import { COLLECTIONS_ENUM }  from '../../dataHandling/dataCache'

const mapStateToProps = (state, ownProps) => {

  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeRoute: (route) => {
      setRoute(route);
    },
  }
}

const BottomNavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomNavigationComponent)

export default BottomNavigationContainer
