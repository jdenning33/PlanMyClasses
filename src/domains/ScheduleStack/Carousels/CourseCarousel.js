import React from 'react';
import style from '../../../style'
import Carousel from '../../../Components/Carousel'

const CourseInfo = ({course, active}) => (
  <div>
    {course.number} <br />
    {course.title}
  </div>
)

const CourseCarousel = ({courseIDs, activeCourseID, courses,
                            afterChange}) => {
  let elements =
  courseIDs.map( (courseID) => {

    let course = courses[courseID];

    let active = (courseID === activeCourseID);
    let iStyle = active ? style.activeCarouselItem : style.carouselItem;

    return(
      <div  style={iStyle}
            key={courseID}>
        <CourseInfo course={course}
                    active={active} />
      </div>
    )
  });

   return(
    <div style={style.stackCarousel}>
      <Carousel elements={elements}
                initialSlide={courseIDs.findIndex(id=>id===activeCourseID)}
                afterChange={afterChange} />
    </div>
  )
}

export default CourseCarousel
