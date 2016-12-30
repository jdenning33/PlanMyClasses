import React from 'react';
import SubjectsComponent from '../../domains/Subject/SubjectsComponent'


const CourseBrowserComponent = ( {subjects, subjectIDs, fetchingIDs, expandedIDs,
                                  getSubjects, subjectClicked} ) => {

  return (
    <div>
      <div>
        <h3> Course Browser </h3>
        <SubjectsComponent  subjects={subjects}
                            subjectIDs={subjectIDs}
                            fetchingIDs={fetchingIDs}
                            expandedIDs={expandedIDs}
                            getSubjects={getSubjects}
                            subjectClicked={subjectClicked}/>
      </div>
    </div>
  )
}

// CourseBrowserComponent.propTypes = {
//
// }

export default CourseBrowserComponent
