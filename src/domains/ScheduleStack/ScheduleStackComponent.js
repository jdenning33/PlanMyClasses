import React from 'react';
import ReducedCourseContainer from '../ReducedCourse/ReducedCourseContainer'
import { COLLECTIONS_ENUM } from '../../dataHandling/dataCache'

// import ClickableContainer from '../../domains/Clickable/ClickableContainer';



class ScheduleComponent extends React.Component{
  constructor( {ready, courses, courseIDs, getData} ){
    super();
  }

  componentWillMount(){
    let my = this.props;
    my.getData(my.courseIDs, COLLECTIONS_ENUM.COURSES);
  }

  render(){
    let my = this.props;

    if(!my.ready) return (<div>loading</div>)

    let courseIDs = my.courseIDs.sort( (a, b) => (
      my.courses[a].sectionIDs.length - my.courses[b].sectionIDs.length
    ));

    return (
      <div>
        {courseIDs.map( (courseID) => {
          return <ReducedCourseContainer  key={courseID}
                                          courseID={courseID} />
        })}
      </div>
    )
  }
}


export default ScheduleComponent
