import React from 'react';
import CourseContainer from './CourseContainer';


const stripAndParse = (str) => {
  return parseInt( str.replace(/\D/g,''), 10 );
};

class CoursesComponent extends React.Component{
  constructor( {courses, courseIDs} ){
    super();
  }

  render(){
    let my = this.props;

    if(Object.keys(my.courses).length === my.courseIDs.length){
      my.courseIDs.sort( (id1, id2) => {
        if(!my.courses[id1] || !my.courses[id2]) return 0;
        else {
          return stripAndParse(my.courses[id1].number) -
                  stripAndParse(my.courses[id2].number);
        }
      });
    }

    return(
      <span>
        {my.courseIDs.map( (courseID) => (
            <span key={courseID}>
              <CourseContainer  courseID={courseID} />
            </span>
          )
        )}
      </span>
    )
  }
};

export default CoursesComponent
