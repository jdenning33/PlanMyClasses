import React from 'react';
import SubjectComponent from './SubjectComponent';
import {COLLECTIONS_ENUM} from '../../dataHandling/dataCache'


const SubjectsComponent = ( {subjects, subjectIDs, fetchingIDs, expandedIDs,
                              cardClicked, getData} ) => {

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
    getData(needToFetch, COLLECTIONS_ENUM.SUBJECTS);
  }

  return (
    <span>
      {subjectIDs.map( (id) => {
        if(!subjects[id])
        return (
          <div key={id}>loading</div>
        )
        else{
          let expanded = false;
          if(expandedIDs.length !== 0){
            expanded = expandedIDs.some((eid) => id===eid);
          }
          return (
            <span key={id}>
            <SubjectComponent subject={subjects[id]}
                              expanded={expanded}
                              cardClicked={cardClicked} />
            </span>
          )
        }
      }
    )}
    </span>
  )
};

export default SubjectsComponent
