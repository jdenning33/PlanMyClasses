import React from 'react'
import SchedPrefContainer from '../../domains/SchedulePreferences/SchedPrefContainer'
import CoursesContainer from '../../domains/Course/CoursesContainer'
// import SchedulesContainer from '../../domains/Schedule/SchedulesContainer'
import ScheduleStackContainer from '../../domains/ScheduleStack/ScheduleStackContainer'
import style from '../../style'

const ScheduleBuilderComponent = ( {courseIDs} ) => (
  <div style={style.scheduleBuilder}>
    <div style={style.scheduleBuilderSub}>
      <div style={style.title}>Schedule Preferences</div>
      <SchedPrefContainer />
    </div>

    <div style={style.scheduleBuilderSub}>
      <div style={style.title}>Desired Courses</div>
      <CoursesContainer courseIDs={courseIDs} />
    </div>

    <div style={style.scheduleBuilderSub}>
      <div style={style.title}>Schedule Preferences</div>
      <ScheduleStackContainer courseIDs={courseIDs} />
    </div>

  </div>
)

export default ScheduleBuilderComponent
