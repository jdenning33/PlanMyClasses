import { connect } from 'react-redux'
import CourseBrowserComponent from './CourseBrowserComponent'
import { courseBrowser } from './courseBrowserDuck'

const mapStateToProps = (state, ownProps) => {

  return {
    helpActive: state.courseBrowserReducer.isHelpActive,
    subjectIDs: state.courseBrowserReducer.subjectIDs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openHelp: () => {
      dispatch( courseBrowser.openHelp() )
    },
    closeHelp: () => {
      dispatch( courseBrowser.closeHelp() )
    }
  }
}

const CourseBrowserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseBrowserComponent)

export default CourseBrowserContainer
