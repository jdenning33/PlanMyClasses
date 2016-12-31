import React from 'react';
// import SubjectsComponent from '../../domains/Subject/SubjectsComponent'
import SubjectsContainer from '../../domains/Subject/SubjectsContainer'


const CourseBrowserComponent = ( {subjectIDs} ) => {

  return (
    <div>
      <div>
        <h3> Course Browser </h3>
        <SubjectsContainer subjectIDs={subjectIDs} />
      </div>
    </div>
  )
}

// CourseBrowserComponent.propTypes = {
//
// }

export default CourseBrowserComponent
