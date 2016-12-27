import { connect }      from 'react-redux'
import HomeComponent    from './HomeComponent'
import { setRoute }     from '../AppRouter'
import dataAPI, { COLLECTIONS_ENUM }  from '../../apis/dataAPI'

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeRoute: (route) => {
      setRoute(route);
    },
    getComments: () => {
      dataAPI.getAll(
        { type: COLLECTIONS_ENUM.SUBJECTS } )
        .then(  (val) => console.log(val) );
    }
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)

export default HomeContainer
