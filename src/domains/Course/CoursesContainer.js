import { connect } from 'react-redux'
import CoursesComponent from './CoursesComponent'

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
    courses: myCourses,
    courseIDs: courseIDs,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{

  }
}

const CoursesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesComponent)

export default CoursesContainer
