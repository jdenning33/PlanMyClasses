import { connect } from 'react-redux'
import CourseBrowserComponent from './CourseBrowserComponent'
import { dataCache } from '../../dataHandling/dataCache'
// import xmlToJson from '../../dataHandling/xmlToJSON'

const mapStateToProps = (state, ownProps) => {
  // let xmlFile = '../../data/current.xml';
  // let jsonFile = xmlToJson(xmlFile);

  return {
    // subjects: state.dataCache.subjects,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testDataCache : (request) => {
      dispatch( dataCache.fetchIfNeeded(request) );
    },
  }
}

const CourseBrowserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseBrowserComponent)

export default CourseBrowserContainer
