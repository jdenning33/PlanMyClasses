import { connect } from 'react-redux'
import CoursesComponent from './CoursesComponent'
import { dataCache } from '../../dataHandling/dataCache'
import { courseBrowser } from '../../routes/CourseBrowser/courseBrowserDuck'

const mapStateToProps = (state, ownProps) => {

  let courseIDs = ownProps.courseIDs;

  let courses = state.dataCacheReducer.data.courses;

  let myCourses = {};
  courseIDs.forEach( (id) => {
    if(courses[id]){
      myCourses[id] = courses[id];
    }
  });

  return {
    courses: myCourses,           //The subject data that has been loaded
    courseIDs: courseIDs,       //The data we need to display regardless of wheter or not its loaded
  }
}

const mapDispatchToProps = (dispatch) => {

}

const CoursesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesComponent)

export default CoursesContainer
