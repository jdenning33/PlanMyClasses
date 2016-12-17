import { connect } from 'react-redux'
import SchedPrefComponent from './SchedPrefComponent'

const mapStateToProps = (state, ownProps) => {

  var links = [];
  state.schedPrefReducer.campus.forEach( preference => {
    if(preference != null) {
      links.push(preference);
    }
  });
  links.push(state.schedPrefReducer.semester);
  links.push(state.schedPrefReducer.online_desire);


  return {
    activeLinks: links
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const SchedPrefContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SchedPrefComponent)

export default SchedPrefContainer
