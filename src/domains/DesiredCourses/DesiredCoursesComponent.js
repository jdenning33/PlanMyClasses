import React, { PropTypes } from 'react'
import LinkContainer from '../Link/LinkContainer'

const CurrentCourses = ( {courses} ) => (
  <span>
    {courses.map((course) => (
        <span key={course.id}>
          <br/>
          {course.id}
        </span>
      )
    )}
  </span>
)

const DesiredCoursesComponent = ( { currentCourses,
                                    addCourseButtonAction} ) => {
  return (
    <div>
      <div>
        <h3> Desired Courses </h3>
        <div>
          <b>Current Courses</b>
          <CurrentCourses     courses={currentCourses}/>
          <br/>
          <LinkContainer    text='Add Course'
                            active={false}
                            clickAction={() => addCourseButtonAction()} />
        </div>

      </div>
    </div>
  )
}

DesiredCoursesComponent.propTypes = {
  currentCourses: PropTypes.array.isRequired,
  addCourseButtonAction: PropTypes.func.isRequired
}

export default DesiredCoursesComponent
