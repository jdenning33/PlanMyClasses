import React from 'react'
import SchedPrefContainer from '../../domains/SchedulePreferences/SchedPrefContainer'
import DesiredCoursesContainer from '../../domains/DesiredCourses/DesiredCoursesContainer'
import SchedulesContainer from '../../domains/Schedule/SchedulesContainer'

const ScheduleBuilderComponent = ( subjects ) => (
  <div>
    <SchedPrefContainer />
    <DesiredCoursesContainer />
    <SchedulesContainer />
  </div>
)

export default ScheduleBuilderComponent
