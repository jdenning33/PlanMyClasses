import React from 'react';
import ClickableContainer from '../../domains/Clickable/ClickableContainer';


const SubjectComponent = ( {subject} ) => {
  let visual = (
    <div>
      <span> {subject.name} </span>
      <br />
      <span> {subject.code} </span>
    </div>
  )
  return (<ClickableContainer node={visual}
                             active={false}
                             clickAction={()=>console.log('clicked it')} />)
};

const SubjectsComponent = ( {subjects, subjectIDs, fetchingIDs, getSubjects} ) => {

  //Check if we have all the data we need
  let needToFetch = [];
  subjectIDs.forEach( (id) => {
    if(subjects[id] || fetchingIDs.some(fid => id===fid)) return;
    else{
      needToFetch.push(id);
    }
  });
  //Request the data we still need from the dataCache
  if(needToFetch.length !== 0) {
    getSubjects(needToFetch);
  }

  return (
    <span>
      {subjectIDs.map( (id) => {
        if(!subjects[id])
        return (
          <div key={id}>loading</div>
        )
        else
        return (
          <span key={id}>
          <SubjectComponent subject={subjects[id]} />
          </span>
        )}
      )}
    </span>
  )
};

const CourseBrowserComponent = ( {subjects, subjectIDs, fetchingIDs,
                                  getSubjects} ) => {

  return (
    <div>
      <div>
        <h3> Course Browser </h3>
        <SubjectsComponent  subjects={subjects}
                            subjectIDs={subjectIDs}
                            fetchingIDs={fetchingIDs}
                            getSubjects={getSubjects} />
      </div>
    </div>
  )
}

// CourseBrowserComponent.propTypes = {
//
// }

export default CourseBrowserComponent
