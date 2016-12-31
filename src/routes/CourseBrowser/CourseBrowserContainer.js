import { connect } from 'react-redux'
import CourseBrowserComponent from './CourseBrowserComponent'

const mapStateToProps = (state, ownProps) => {

  return {
    subjectIDs: state.courseBrowserReducer.subjectIDs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const CourseBrowserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseBrowserComponent)

export default CourseBrowserContainer
