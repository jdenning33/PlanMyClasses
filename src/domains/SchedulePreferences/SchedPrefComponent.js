import React, { PropTypes } from 'react'
import PrefLinksComponent from './PrefLinks/PrefLinksComponent'
import { CAMPUS_ENUM, SEMESTER_ENUM, DESIRE_ENUM} from './schedPrefDuck'

const SchedPrefComponent = ( {activeLinks,  setCampusClick,
                                            setSemesterClick,
                                            setOnlineDesireClick} ) => {
  return (
    <div>
      <div>
        <div>
          <b>Campus: </b>
          <PrefLinksComponent ENUM={CAMPUS_ENUM}
                              activeLinks={activeLinks}
                              action={(campus) => setCampusClick(campus)} />
        </div>

        <div>
          <b>Change Semester: </b>
          <PrefLinksComponent ENUM={SEMESTER_ENUM}
                              activeLinks={activeLinks}
                              action={(semester) => setSemesterClick(semester)} />
        </div>

        <div>
          <b>Online: </b>
          <PrefLinksComponent ENUM={DESIRE_ENUM}
                              activeLinks={activeLinks}
                              action={(desire) => setOnlineDesireClick(desire)} />
        </div>

      </div>
    </div>
  )
}

SchedPrefComponent.propTypes = {
  activeLinks: PropTypes.array.isRequired
}

export default SchedPrefComponent
