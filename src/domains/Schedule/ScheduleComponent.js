import React from 'react';
import ReducedCourseContainer from '../ReducedCourse/ReducedCourseContainer'
// import ClickableContainer from '../../domains/Clickable/ClickableContainer';



class ScheduleComponent extends React.Component{
  constructor( {ready, courses, sections, scheduleJSON, expanded,
                cardClicked} ){
    super();
  }

  componentWillMount(){

  }

  render(){
    let my = this.props;

    if(!my.ready) return(<div>loading</div>);

    let courseIDs = Object.keys(my.scheduleJSON).sort( (a, b) => (
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
