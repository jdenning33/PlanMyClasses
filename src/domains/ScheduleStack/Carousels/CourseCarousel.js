import React from 'react';
import style from '../../../style'
import Carousel from '../../../Components/Carousel'


const CourseInfo = ({course, active}) => (
  <div>
    {course.number}
    {course.title}
  </div>
)

const CourseCarousel = ({courseIDs, stackMap, courses}) => {
  let elements =
  courseIDs.map( (courseID) => {

    console.log('ok');
    let active = stackMap.activeCourseIDs.some( id => id===courseID)
    let course = courses[courseID];
    let iStyle = active ? style.activeCarouselItem : style.carouselItem;

    let i = 0;
    return(
      <div  style={iStyle}
            key={courseID}>
        <CourseInfo course={course}
                    active={active} />
      </div>
    )
  });

  return(
    <div>
      <Carousel elements={elements} />
    </div>
  )
}

export default CourseCarousel
