import { connect } from 'react-redux'
import CourseBrowserComponent from './CourseBrowserComponent'
// import xmlToJson from '../../dataHandling/xmlToJSON'

const mapStateToProps = (state, ownProps) => {
  // let xmlFile = '../../data/current.xml';
  // let jsonFile = xmlToJson(xmlFile);

  return {

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
