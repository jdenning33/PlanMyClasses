import React from 'react';
import style from '../../style'
import ReducedCourseContainer from '../ReducedCourse/ReducedCourseContainer'
import CourseCarousel from './Carousels/CourseCarousel'
import { COLLECTIONS_ENUM } from '../../dataHandling/dataCache'

// import ClickableContainer from '../../domains/Clickable/ClickableContainer';

 const getRelationShipSize = (relationship, courses) => {
   console.log(courses);
   console.log(relationship);
   let size = 0;
   relationship.forEach( (courseID) => {
     size += courses[courseID].sectionIDs.length;
   });
   return size;
 }

class ScheduleStackComponent extends React.Component{
  constructor( {ready, courses, courseIDs, stackMap, getData} ){
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

    let relationships = my.stackMap.relationships.sort( (a,b) => {
      return ( getRelationShipSize(a, my.courses) -
               getRelationShipSize(b, my.courses) );
    })

    let elements =
    relationships.map( (relationship) => {
      return(
        <div  key={relationship[0]}>
          <CourseCarousel courseIDs={relationship}
                          stackMap={my.stackMap}
                          courses={my.courses} />
        </div>
      )
    });

    return (
      <div style={style.scheduleStack}>
        {elements}
      </div>
    )
  }
}


export default ScheduleStackComponent
