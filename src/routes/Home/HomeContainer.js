import { connect }      from 'react-redux'
import HomeComponent    from './HomeComponent'
import { setRoute }     from '../AppRouter'
import dataAPI, { COLLECTIONS_ENUM }  from '../../apis/dataAPI'
import { getRawUNMdata } from '../../rawUNMdataHandler'

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeRoute: (route) => {
      setRoute(route);
    },
    eraseDB: () => {
      dataAPI.delete( { type: COLLECTIONS_ENUM.SUBJECTS    } );
      dataAPI.delete( { type: COLLECTIONS_ENUM.COURSES     } );
      dataAPI.delete( { type: COLLECTIONS_ENUM.SECTIONS    } );
      dataAPI.delete( { type: COLLECTIONS_ENUM.INSTRUCTORS } );
    },
    populateDB: () => {
      getRawUNMdata();
    },
    addSubject: () => {
      dataAPI.add(
        { type: COLLECTIONS_ENUM.SUBJECTS,
          data: { code: 'ECE',
                  name: 'Electrical and Computer Engineering'}
        })
        .then(  (val) => console.log( val) )
        .catch( (err) => console.log(err) );
    }
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)

export default HomeContainer
