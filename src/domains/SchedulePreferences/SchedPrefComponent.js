import React, { PropTypes } from 'react'
import PrefLinksComponent from './PrefLinks/PrefLinksComponent'
import { CAMPUS_ENUM, setCampus } from './schedPrefDuck'
import { SEMESTER_ENUM, setSemester } from './schedPrefDuck'
import { DESIRE_ENUM, setOnlineDesire } from './schedPrefDuck'

const SchedPrefComponent = () => (
  <div>
    <div>
      <h3> Schedule Preferences </h3>

      <div>
        <b>Campus: </b>
        <PrefLinksComponent ENUM={CAMPUS_ENUM} action={setCampus} />
      </div>

      <div>
        <b>Change Semester: </b>
        <PrefLinksComponent ENUM={SEMESTER_ENUM} action={setSemester} />
      </div>

      <div>
        <b>Online: </b>
        <PrefLinksComponent ENUM={DESIRE_ENUM} action={setOnlineDesire} />
      </div>

    </div>
  </div>
)

SchedPrefComponent.propTypes = {
}

export default SchedPrefComponent
