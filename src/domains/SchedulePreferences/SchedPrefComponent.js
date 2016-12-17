import React, { PropTypes } from 'react'
import PrefLinksComponent from './PrefLinks/PrefLinksComponent'
import { CAMPUS_ENUM, setCampus } from './schedPrefDuck'
import { SEMESTER_ENUM, setSemester } from './schedPrefDuck'
import { DESIRE_ENUM, setOnlineDesire } from './schedPrefDuck'

const SchedPrefComponent = ( {activeLinks} ) => {
  console.log(activeLinks);
  return (
    <div>
      <div>
        <h3> Schedule Preferences </h3>

        <div>
          <b>Campus: </b>
          <PrefLinksComponent ENUM={CAMPUS_ENUM}
                              activeLinks={activeLinks}
                              action={setCampus} />
        </div>

        <div>
          <b>Change Semester: </b>
          <PrefLinksComponent ENUM={SEMESTER_ENUM}
                              activeLinks={activeLinks}
                              action={setSemester} />
        </div>

        <div>
          <b>Online: </b>
          <PrefLinksComponent ENUM={DESIRE_ENUM}
                              activeLinks={activeLinks}
                              action={setOnlineDesire} />
        </div>

      </div>
    </div>
  )
}

SchedPrefComponent.propTypes = {
  activeLinks: PropTypes.array.isRequired
}

export default SchedPrefComponent
