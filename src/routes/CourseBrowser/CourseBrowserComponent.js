import React from 'react';
// import SubjectsComponent from '../../domains/Subject/SubjectsComponent'
import SubjectsContainer from '../../domains/Subject2/SubjectsContainer'


const CourseBrowserComponent = ( {subjects, subjectIDs, fetchingIDs, expandedIDs,
                                  getData, cardClicked} ) => {

  return (
    <div>
      <div>
        <h3> Course Browser </h3>
        {/* <SubjectsComponent  subjects={subjects}
                            subjectIDs={subjectIDs}
                            fetchingIDs={fetchingIDs}
                            expandedIDs={expandedIDs}
                            getData={getData}
                            cardClicked={cardClicked}/> */}
        <span />
        <SubjectsContainer subjectIDs={subjectIDs} />
      </div>
    </div>
  )
}

// CourseBrowserComponent.propTypes = {
//
// }

export default CourseBrowserComponent
