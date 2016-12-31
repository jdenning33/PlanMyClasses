import React from 'react';
import CourseContainer from './CourseContainer';


const CoursesComponent = ( {courseIDs} ) => {

  return (
    <span>
      {courseIDs.map( (courseID) => (
          <span key={courseID}>
            <CourseContainer  courseID={courseID} />
          </span>
        )
      )}
    </span>
  )
};

export default CoursesComponent
