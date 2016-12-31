import React from 'react';
import SubjectsComponent from '../../domains/Subject/SubjectsComponent'


const CourseBrowserComponent = ( {subjects, subjectIDs, fetchingIDs, expandedIDs,
                                  getData, cardClicked} ) => {

  return (
    <div>
      <div>
        <h3> Course Browser </h3>
        <SubjectsComponent  subjects={subjects}
                            subjectIDs={subjectIDs}
                            fetchingIDs={fetchingIDs}
                            expandedIDs={expandedIDs}
                            getData={getData}
                            cardClicked={cardClicked}/>
      </div>
    </div>
  )
}

// CourseBrowserComponent.propTypes = {
//
// }

export default CourseBrowserComponent
