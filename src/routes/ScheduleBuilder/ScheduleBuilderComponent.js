import React from 'react'
import SchedPrefContainer from '../../domains/SchedulePreferences/SchedPrefContainer'
import DesiredCoursesContainer from '../../domains/DesiredCourses/DesiredCoursesContainer'

const ScheduleBuilderComponent = ( subjects ) => (
  <div>
    <SchedPrefContainer />
    <DesiredCoursesContainer />
    <div>
      Suggested Schedules
    </div>
  </div>
)

export default ScheduleBuilderComponent
